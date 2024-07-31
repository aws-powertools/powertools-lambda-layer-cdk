import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Architecture, RuntimeFamily } from 'aws-cdk-lib/aws-lambda';
import { LambdaPowertoolsLayerPythonV3, constructBuildArgs } from '../src';

describe('with no configuration the construct', () => {
  const stack = new Stack();
  new LambdaPowertoolsLayerPythonV3(stack, 'PowertoolsLayerPythonV3');
  const template = Template.fromStack(stack);
  test('synthesizes successfully', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      Description: 'Powertools for AWS Lambda (Python) V3 [x86_64] latest version',
    });
  });

  test('has license set to MIT-0', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      LicenseInfo: 'MIT-0',
    });
  });

  test('matches the default python 3.12 runtimes', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      CompatibleRuntimes: [
        'python3.12',
      ],
    });
  });
});

describe('with python 3.8 version', () => {
  const stack = new Stack();
  new LambdaPowertoolsLayerPythonV3(stack, 'PowertoolsLayerPythonV3', {
    runtimeFamily: RuntimeFamily.PYTHON,
    compatibleArchitectures: [Architecture.X86_64],
    pythonVersion: '3.8',
  });
  const template = Template.fromStack(stack);
  test('matches the default python 3.8 runtimes', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      CompatibleRuntimes: [
        'python3.8',
      ],
    });
  });
});

describe('with python 3.9 version', () => {
  const stack = new Stack();
  new LambdaPowertoolsLayerPythonV3(stack, 'PowertoolsLayerPythonV3', {
    runtimeFamily: RuntimeFamily.PYTHON,
    compatibleArchitectures: [Architecture.X86_64],
    pythonVersion: '3.9',
  });
  const template = Template.fromStack(stack);
  test('matches the default python 3.9 runtimes', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      CompatibleRuntimes: [
        'python3.9',
      ],
    });
  });
});

describe('with python 3.10 version', () => {
  const stack = new Stack();
  new LambdaPowertoolsLayerPythonV3(stack, 'PowertoolsLayerPythonV3', {
    runtimeFamily: RuntimeFamily.PYTHON,
    compatibleArchitectures: [Architecture.X86_64],
    pythonVersion: '3.10',
  });
  const template = Template.fromStack(stack);
  test('matches the default python 3.10 runtimes', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      CompatibleRuntimes: [
        'python3.10',
      ],
    });
  });
});


describe('with python 3.11 version', () => {
  const stack = new Stack();
  new LambdaPowertoolsLayerPythonV3(stack, 'PowertoolsLayerPythonV3', {
    runtimeFamily: RuntimeFamily.PYTHON,
    compatibleArchitectures: [Architecture.X86_64],
    pythonVersion: '3.11',
  });
  const template = Template.fromStack(stack);
  test('matches the default python 3.11 runtimes', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      CompatibleRuntimes: [
        'python3.11',
      ],
    });
  });
});

describe('with arm64 architecture', () => {
  const stack = new Stack();
  new LambdaPowertoolsLayerPythonV3(stack, 'PowertoolsLayerPythonV3', {
    runtimeFamily: RuntimeFamily.PYTHON,
    compatibleArchitectures: [Architecture.ARM_64],
  });
  const template = Template.fromStack(stack);
  test('synthesizes successfully', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      Description: 'Powertools for AWS Lambda (Python) V3 [arm64] latest version',
      CompatibleArchitectures: ['arm64'],
    });
  });
});

describe('for layerVersionName configuraiton the construct', () => {
  test('synthisizes to a layer with provided name', () => {
    const stack = new Stack();
    new LambdaPowertoolsLayerPythonV3(stack, 'PowertoolsLayerPythonV3', {
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
    new LambdaPowertoolsLayerPythonV3(stack, 'PowertoolsLayerPythonV3', {
      version: '1.21.0',
    });

    Template.fromStack(stack).hasResourceProperties(
      'AWS::Lambda::LayerVersion',
      {
        Description:
          'Powertools for AWS Lambda (Python) V3 [x86_64] version 1.21.0',
      },
    );
  });

  test('fails with invalid version', () => {
    const stack = new Stack();
    expect(
      () =>
        new LambdaPowertoolsLayerPythonV3(stack, 'PowertoolsLayerBadVersion', {
          version: '0.0.0',
        }),
    ).toThrow(/docker exited with status 1/);
  });

  test('synthesizes with pydantic and specific version', () => {
    const stack = new Stack();
    new LambdaPowertoolsLayerPythonV3(stack, 'LayerExtrasVersion', {
      includeExtras: true,
      version: '2.40.0',
    });

    Template.fromStack(stack).hasResourceProperties(
      'AWS::Lambda::LayerVersion',
      {
        Description:
          'Powertools for AWS Lambda (Python) V3 [x86_64] with extra dependencies version 2.40.0',
      },
    );
  });

  test('synthesizes with extras and latest version', () => {
    const stack = new Stack();
    new LambdaPowertoolsLayerPythonV3(stack, 'LayerExtrasNoVersion', {
      includeExtras: true,
    });

    Template.fromStack(stack).hasResourceProperties(
      'AWS::Lambda::LayerVersion',
      {
        Description:
          'Powertools for AWS Lambda (Python) V3 [x86_64] with extra dependencies latest version',
      },
    );
  });
});

describe('construct build args for Dockerfile', () => {
  test('returns extras and version', () => {
    const args = constructBuildArgs(
      RuntimeFamily.PYTHON,
      true,
      '1.21.0',
    );

    expect(args).toEqual('[all]==1.21.0');
  });

  test('returns only extras when no version provided', () => {
    const args = constructBuildArgs(
      RuntimeFamily.PYTHON,
      true,
      undefined,
    );

    expect(args).toEqual('[all]');
  });

  test('returns a git url with extras when a git url is provided', () => {
    const version =
      'git+https://github.com/awslabs/aws-lambda-powertools-python@v2';
    const args = constructBuildArgs(
      RuntimeFamily.PYTHON,
      true,
      version,
    );

    expect(args).toEqual(`[all] @ ${version}`);
  });

  test('returns only version when no extras flag provided', () => {
    const args = constructBuildArgs(
      RuntimeFamily.PYTHON,
      undefined,
      '1.11.0',
    );

    expect(args).toEqual('==1.11.0');
  });

  test('returns empty when no version and extras provided', () => {
    const args = constructBuildArgs(
      RuntimeFamily.PYTHON,
      undefined,
      undefined,
    );

    expect(args).toEqual('');
  });

  test('returns a git url when a git url is provided and extras provided', () => {
    const version =
      'git+https://github.com/awslabs/aws-lambda-powertools-python@v2';
    const args = constructBuildArgs(
      RuntimeFamily.PYTHON,
      false,
      version,
    );

    expect(args).toEqual(` @ ${version}`);
  });
});
