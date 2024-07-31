import * as path from 'path';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { PowertoolsLayerProps } from './lambda-powertools-layer-props';
import {
  getDockerPlatformNameFromArchitectures,
  constructBuildArgs,
} from './utils';

/**
 * Defines a new Lambda Layer with Powertools for AWS Lambda (Python) library.
 */

export class LambdaPowertoolsLayerPythonV3 extends lambda.LayerVersion {
  /** CDK Layer for Python v3 **/

  constructor(scope: Construct, id: string, props?: PowertoolsLayerProps) {
    const languageName = 'Python';
    const dockerFilePath = path.join(__dirname, `../layer/${languageName}v3`);
    const compatibleArchitectures = props?.compatibleArchitectures ?? [
      lambda.Architecture.X86_64,
    ];
    const compatibleArchitecturesDescription = compatibleArchitectures
      .map((arch) => arch.name)
      .join(', ');

    // We need to remove the Python word to send to the container only the version
    let pythonVersionNormalized = props?.pythonVersion?.toString() ?? Runtime.PYTHON_3_12.toString();
    pythonVersionNormalized = pythonVersionNormalized.replace('python', '');

    console.log(`path ${dockerFilePath}`);
    super(scope, id, {
      code: lambda.Code.fromDockerBuild(dockerFilePath, {
        buildArgs: {
          PACKAGE_SUFFIX: constructBuildArgs(
            lambda.RuntimeFamily.PYTHON,
            props?.includeExtras,
            props?.version,
          ),
          PYTHON_VERSION: pythonVersionNormalized,
        },
        // supports cross-platform docker build
        platform: getDockerPlatformNameFromArchitectures(
          compatibleArchitectures,
        ),
      }),
      layerVersionName: props?.layerVersionName || undefined,
      license: 'MIT-0',
      compatibleRuntimes: [props?.pythonVersion || Runtime.PYTHON_3_12],
      description:
        `Powertools for AWS Lambda (Python) V3 [${compatibleArchitecturesDescription}]${props?.includeExtras ? ' with extra dependencies' : ''
        } ${props?.version ? `version ${props?.version}` : 'latest version'
        }`.trim(),
      // Dear reader: I'm happy that you've stumbled upon this line too! You might wonder, why are we doing this and passing `undefined` when the list is empty?
      // Answer: on regions that don't support ARM64 Lambdas, we can't use the `compatibleArchitectures` parameter. Otherwise CloudFormation will bail with an error.
      // So if this construct is called with en empty list of architectures, just pass undefined down to the CDK construct.
      compatibleArchitectures:
        compatibleArchitectures.length == 0
          ? undefined
          : compatibleArchitectures,
    });
  }
}
