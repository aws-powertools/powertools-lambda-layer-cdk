import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam'
import { accountIds, bucketName } from './constants';
import { NagSuppressions } from 'cdk-nag/lib/nag-suppressions';

// This stack creates a role to be assumed by Beta and Prod layer accounts
export class CdkSarRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Policy using least privilege
    const inlinePolicy = new iam.PolicyDocument({
      statements: [
        // Permission to store the SAR content in the bucket
        new iam.PolicyStatement({
          actions: ["s3:PutObject*", "s3:GetObject*"],
          effect: iam.Effect.ALLOW,
          resources: [`arn:aws:s3:::${bucketName}/*`],
        }),
        // Permission to manager the serverlessrepo applications
        new iam.PolicyStatement({
          actions: ["serverlessrepo:CreateApplication",
                    "serverlessrepo:CreateApplicationVersion",
                    "serverlessrepo:PutApplicationPolicy",
                    "serverlessrepo:UpdateApplication",
                    "serverlessrepo:ListApplicationVersions",
                    "serverlessrepo:ListApplications"],
          effect: iam.Effect.ALLOW,
          resources: [`arn:aws:serverlessrepo:eu-west-1:${cdk.Stack.of(this).account}:applications/*`],
        }),
        // Permission to manager Cloudformation stacks
        new iam.PolicyStatement({
          actions: ["serverlessrepo:CreateCloudFormationChangeSet",
                    "cloudformation:ListStacks",
                    "cloudformation:ListChangeSets",
                    "cloudformation:ExecuteChangeSet",
                    "cloudformation:CreateChangeSet",
                    "cloudformation:DescribeStacks",
                    "cloudformation:DescribeChangeSet",
                    "s3:GetObject*",
                    "lambda:PublishLayerVersion"],
          effect: iam.Effect.ALLOW,
          resources: ["*"],
        }),
        // Permissions to Delete stacks for applications serverlessrepo*
        new iam.PolicyStatement({
          actions: ["cloudformation:DeleteStack"],
          effect: iam.Effect.ALLOW,
          resources: [`arn:aws:serverlessrepo:eu-west-1:${cdk.Stack.of(this).account}:applications/serverlessrepo*`],
        }),
        // Permissions to Delete test applications
        new iam.PolicyStatement({
          actions: ["serverlessrepo:DeleteApplication"],
          effect: iam.Effect.ALLOW,
          resources: [`arn:aws:serverlessrepo:eu-west-1:${cdk.Stack.of(this).account}:applications/test-*`],
        }),
      ],
    });
      
    // Create the role with the custom trust policy and the inlinePolicy
    new iam.Role(this, 'PowertoolsPipelineStack-Sarv3Role', {
      assumedBy: new iam.CompositePrincipal(
        ...accountIds.map(accountId => 
          new iam.SessionTagsPrincipal(
            new iam.AccountPrincipal(accountId)
          )
        )
      ),
      roleName: 'PowertoolsPipelineStack-Sarv3Role',
      inlinePolicies: {inlinePolicy},
      description: 'Role to be assumed by the pipeline when deploying SAR',
    });

    NagSuppressions.addResourceSuppressions(this, 
        [
          {
            id: 'AwsSolutions-IAM5',
            reason:
              'Wildcard permission is required to upload things to the specific bucket and to exclude any test applications in the serverless repository.',
          },
        ],
        true, // Apply to any child construct
    );
  }
}
