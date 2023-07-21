const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  authorName: 'Amazon Web Services',
  authorUrl: 'https://aws.amazon.com',
  authorOrganization: true,
  keywords: [
    'aws',
    'cdk',
    'powertools',
    'python',
    'layer',
    'lambda',
    'devax',
    'typescript',
    'nodejs',
  ],
  cdkVersion: '2.88.0',
  defaultReleaseBranch: 'main',
  minNodeVersion: '16.19.1',
  majorVersion: 3,
  name: 'cdk-aws-lambda-powertools-layer',
  repositoryUrl:
    'https://github.com/awslabs/cdk-aws-lambda-powertools-layer.git',
  description: 'Powertools for AWS Lambda layer for python and typescript',
  devDeps: [
    '@types/prettier@2.6.0', // pin until breaking changes is resolved: https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/60310
  ],
  github: false,
  publishToPypi: {
    distName: 'cdk-aws-lambda-powertools-layer',
    module: 'cdk_aws_lambda_powertools_layer',
  },
  license: 'MIT-0',
  copyrightOwner: 'Amazon.com, Inc. or its affiliates. All Rights Reserved.',
});

project.synth();
