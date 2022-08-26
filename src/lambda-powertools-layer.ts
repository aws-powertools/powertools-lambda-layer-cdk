import * as path from 'path';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Properties for Powertools layer for python.
 */
export interface PowertoolsLayerProps {
  /**
   * The powertools package version from pypi repository.
   */
  readonly version?: string;
  /**
   * A flag for the pydantic extras dependency, used for parsing.
   * This will increase the size of the layer significantly. If you don't use parsing, ignore it.
   */
  readonly includeExtras?: boolean;

  /**
   * the name of the layer, will be randomised if empty
   */
  readonly layerVersionName?: string;

  /**
   * the runtime of the layer
   */
  readonly runtimeFamily?: lambda.RuntimeFamily;
}

/**
 * Defines a new Lambda Layer with Powertools for python library.
 */
export class LambdaPowertoolsLayer extends lambda.LayerVersion {
  /**
   * creates build argument for the Dockerfile.
   * There are multiple combinations between version and extras package that results in different suffix for the installation.
   * With and without version, with and without extras flag.
   * We construct one suffix here because it is easier to do in code than inside the Dockerfile with bash commands.
   * For example, if we set extras=true and version=1.22.0 we get '[pydantic]==1.22.0'.
   *
   */
  static constructBuildArgs(
    runtimeFamily: lambda.RuntimeFamily,
    includeExtras: boolean | undefined,
    version: string | undefined,
  ): string {
    let suffix = '';
    switch (runtimeFamily) {
      case lambda.RuntimeFamily.PYTHON:
        if (includeExtras) {
          suffix = '[pydantic]';
        }
        if (version) {
          suffix = `${suffix}==${version}`;
        }
        break;
      case lambda.RuntimeFamily.NODEJS:
        if (version) {
          suffix = `@${version}`;
        }
        break;
      default:
        break;
    }
    return suffix;
  }

  constructor(scope: Construct, id: string, props?: PowertoolsLayerProps) {
    const runtimeFamily = props?.runtimeFamily ?? lambda.RuntimeFamily.PYTHON;
    const languageName = getLanguageNameFromRuntimeFamily(runtimeFamily);
    const dockerFilePath = path.join(__dirname, `../layer/${languageName}`);
    console.log(`path ${dockerFilePath}`);
    super(scope, id, {
      code: lambda.Code.fromDockerBuild(dockerFilePath, {
        buildArgs: {
          PACKAGE_SUFFIX: LambdaPowertoolsLayer.constructBuildArgs(
            runtimeFamily,
            props?.includeExtras,
            props?.version,
          ),
        },
      }),
      layerVersionName: props?.layerVersionName ? props?.layerVersionName : undefined,
      license: 'MIT-0',
      compatibleRuntimes: getRuntimesFromRuntimeFamily(runtimeFamily),
      description: `Lambda Powertools for ${languageName}${
        props?.includeExtras ? ' with Pydantic' : ''
      } ${props?.version ? `version ${props?.version}` : 'latest version'}`.trim(),
    });
  }
}

function getRuntimesFromRuntimeFamily(runtimeFamily: lambda.RuntimeFamily): lambda.Runtime[] | undefined {
  switch (runtimeFamily) {
    case lambda.RuntimeFamily.PYTHON:
      return [
        lambda.Runtime.PYTHON_3_6,
        lambda.Runtime.PYTHON_3_7,
        lambda.Runtime.PYTHON_3_8,
        lambda.Runtime.PYTHON_3_9,
      ];
    case lambda.RuntimeFamily.NODEJS:
      return [
        lambda.Runtime.NODEJS_12_X,
        lambda.Runtime.NODEJS_14_X,
        lambda.Runtime.NODEJS_16_X,
      ];
    default:
      return [];
  }
}

function getLanguageNameFromRuntimeFamily(runtimeFamily: lambda.RuntimeFamily): string {
  switch (runtimeFamily) {
    case lambda.RuntimeFamily.PYTHON:
      return 'Python';
    case lambda.RuntimeFamily.NODEJS:
      return 'TypeScript';
    default:
      return 'Unknown';
  }
}
