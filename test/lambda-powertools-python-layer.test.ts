import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RuntimeFamily } from 'aws-cdk-lib/aws-lambda';
import { LambdaPowertoolsLayer } from '../src';


describe('with no configuration the construct', () => {
  const stack = new Stack();
  new LambdaPowertoolsLayer(stack, 'PowertoolsLayer');
  const template = Template.fromStack(stack);
  test('synthesizes successfully', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      Description: 'Lambda Powertools for Python latest version',
    });
  });

  test('has license set to MIT-0', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      LicenseInfo: 'MIT-0',
    });
  });

  test('matches the python 3.x runtimes', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      CompatibleRuntimes: [
        'python3.6',
        'python3.7',
        'python3.8',
        'python3.9',
      ],
    });
  });
});

describe('for layerVersionName configuraiton the construct', () => {
  test('synthisizes to a layer with provided name', () => {
    const stack = new Stack();
    new LambdaPowertoolsLayer(stack, 'PowertoolsLayer', {
      layerVersionName: 'mySpecialName',
    });

    Template.fromStack(stack).hasResourceProperties('AWS::Lambda::LayerVersion', {
      LayerName: 'mySpecialName',
    });
  });
});

describe('with version configuration the construct', () => {
  test('synthesizes to a layer with specific valid version', () => {
    const stack = new Stack();
    new LambdaPowertoolsLayer(stack, 'PowertoolsLayer', {
      version: '1.21.0',
    });


    Template.fromStack(stack).hasResourceProperties('AWS::Lambda::LayerVersion', {
      Description: 'Lambda Powertools for Python version 1.21.0',
    });
  });

  test('fails with invalid version', () => {
    const stack = new Stack();
    expect(() => new LambdaPowertoolsLayer(stack, 'PowertoolsLayerBadVersion', {
      version: '0.0.0',
    })).toThrow(/docker exited with status 1/);
  });

  test('synthesizes with pynadtic and specific version', () => {
    const stack = new Stack();
    new LambdaPowertoolsLayer(stack, 'LayerExtrasVersion', {
      includeExtras: true,
      version: '1.22.0',
    });

    Template.fromStack(stack).hasResourceProperties('AWS::Lambda::LayerVersion', {
      Description: 'Lambda Powertools for Python with Pydantic version 1.22.0',
    });

  });

  test('synthesizes with pyndatic and latest version', () => {
    const stack = new Stack();
    new LambdaPowertoolsLayer(stack, 'LayerExtrasNoVersion', {
      includeExtras: true,
    });

    Template.fromStack(stack).hasResourceProperties('AWS::Lambda::LayerVersion', {
      Description: 'Lambda Powertools for Python with Pydantic latest version',
    });
  });
});

describe('construct build args for Dockerfile', () => {
  test('returns pydantic and version', () => {
    const args = LambdaPowertoolsLayer.constructBuildArgs(RuntimeFamily.PYTHON, true, '1.21.0');

    expect(args).toEqual('[pydantic]==1.21.0');
  });

  test('returns only pydantic when no version provided', () => {
    const args = LambdaPowertoolsLayer.constructBuildArgs(RuntimeFamily.PYTHON, true, undefined);

    expect(args).toEqual('[pydantic]');
  });

  test('returns only version when no extras flag provided', () => {
    const args = LambdaPowertoolsLayer.constructBuildArgs(RuntimeFamily.PYTHON, undefined, '1.11.0');

    expect(args).toEqual('==1.11.0');
  });

  test('returns empty when no version and extras provided', () => {
    const args = LambdaPowertoolsLayer.constructBuildArgs(RuntimeFamily.PYTHON, undefined, undefined);

    expect(args).toEqual('');
  });

});