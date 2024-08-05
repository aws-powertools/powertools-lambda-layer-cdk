# Welcome to the project to deploy the SAR ROLE

This AWS CDK project is designed to deploy a Serverless Application Repository (SAR) IAM Role within the SAR account, enabling accounts from both the beta and prod layers to assume this role. The role's trust policy is configured to allow specific account IDs to assume the role and use session tags, ensuring secure and flexible cross-account access. 

Additionally, the role is granted full access to S3 specific bucket, serverlessrepo applications and CloudFormation Stacks.

To deploy this project, you need to specify the account IDs and the bucket name in the `constants.ts` file.
