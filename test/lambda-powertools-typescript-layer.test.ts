import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RuntimeFamily } from 'aws-cdk-lib/aws-lambda';
import { LambdaPowertoolsLayer } from '../src';

describe('with minimal configuration the construct', () => {
  const stack = new Stack();
  new LambdaPowertoolsLayer(stack, 'PowertoolsLayer', {
    runtimeFamily: RuntimeFamily.NODEJS,
  });
  const template = Template.fromStack(stack);
  test('synthesizes successfully', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      Description:
        'Powertools for AWS Lambda (TypeScript) [x86_64] latest version',
    });
  });

  test('has license set to MIT-0', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      LicenseInfo: 'MIT-0',
    });
  });

  test('matches the nodejs runtimes', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      CompatibleRuntimes: [
        'nodejs16.x',
        'nodejs18.x',
        'nodejs20.x',
      ],
    });
  });
});

describe('for layerVersionName configuration the construct', () => {
  test('synthisizes to a layer with provided name', () => {
    const stack = new Stack();
    new LambdaPowertoolsLayer(stack, 'PowertoolsLayer', {
      layerVersionName: 'mySpecialName',
    });

    Template.fromStack(stack).hasResourceProperties(
      'AWS::Lambda::LayerVersion',
      {
        LayerName: 'mySpecialName',
      },
    );
  });
});

describe('with version configuration the construct', () => {
  test('synthesizes to a layer with specific valid version', () => {
    const stack = new Stack();
    const version = '0.9.0';
    new LambdaPowertoolsLayer(stack, 'PowertoolsLayer', {
      runtimeFamily: RuntimeFamily.NODEJS,
      version: version,
    });

    Template.fromStack(stack).hasResourceProperties(
      'AWS::Lambda::LayerVersion',
      {
        Description: `Powertools for AWS Lambda (TypeScript) [x86_64] version ${version}`,
      },
    );
  });

  test('fails with invalid version', () => {
    const stack = new Stack();
    expect(
      () =>
        new LambdaPowertoolsLayer(stack, 'PowertoolsLayerBadVersion', {
          runtimeFamily: RuntimeFamily.NODEJS,
          version: '12.222.21123',
        }),
    ).toThrow();
  });

  test('returns  version with @ when provided provided', () => {
    const args = LambdaPowertoolsLayer.constructBuildArgs(
      RuntimeFamily.NODEJS,
      undefined,
      '0.9.0',
    );

    expect(args).toEqual('@0.9.0');
  });

  test('returns empty when no version provided', () => {
    const args = LambdaPowertoolsLayer.constructBuildArgs(
      RuntimeFamily.NODEJS,
      undefined,
      undefined,
    );

    expect(args).toEqual('');
  });
});
