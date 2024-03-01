const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Amazon Web Services',
  authorName: 'Amazon Web Services',
  authorUrl: 'https://aws.amazon.com',
  authorAddress: '',
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
  jsiiVersion: '5.3.x',
  typescriptVersion: '5.3.x',
  cdkVersion: '2.108.1',
  defaultReleaseBranch: 'main',
  minNodeVersion: '18.18.2',
  majorVersion: 3,
  name: 'cdk-aws-lambda-powertools-layer',
  repositoryUrl:
    'https://github.com/awslabs/cdk-aws-lambda-powertools-layer.git',
  description: 'Powertools for AWS Lambda layer for python and typescript',
  jestOptions: {
    jestVersion: '29',
  },
  github: false,
  publishToPypi: {
    distName: 'cdk-aws-lambda-powertools-layer',
    module: 'cdk_aws_lambda_powertools_layer',
  },
  license: 'MIT-0',
  copyrightOwner: 'Amazon.com, Inc. or its affiliates. All Rights Reserved.',
});

project.synth();
