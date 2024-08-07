import * as path from 'path';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PowertoolsLayerProps } from './lambda-powertools-layer-props';
import {
  getDockerPlatformNameFromArchitectures,
  getLanguageNameFromRuntimeFamily,
  getRuntimesFromRuntimeFamily,
  constructBuildArgs,
} from './utils';

/**
 * Defines a new Lambda Layer with Powertools for AWS Lambda (Python) library.
 */
export class LambdaPowertoolsLayer extends lambda.LayerVersion {
  /**
   * creates build argument for the Dockerfile.
   * There are multiple combinations between version and extras package that results in different suffix for the installation.
   * With and without version, with and without extras flag.
   * We construct one suffix here because it is easier to do in code than inside the Dockerfile with bash commands.
   * For example, if we set `includeExtras=true` and `version=1.22.0` we get '[all]==1.22.0'.
   *
   */

  constructor(scope: Construct, id: string, props?: PowertoolsLayerProps) {
    const runtimeFamily = props?.runtimeFamily ?? lambda.RuntimeFamily.PYTHON;
    const languageName = getLanguageNameFromRuntimeFamily(runtimeFamily);
    const dockerFilePath = path.join(__dirname, `../layer/${languageName}`);
    const compatibleArchitectures = props?.compatibleArchitectures ?? [
      lambda.Architecture.X86_64,
    ];
    const compatibleArchitecturesDescription = compatibleArchitectures
      .map((arch) => arch.name)
      .join(', ');

    console.log(`path ${dockerFilePath}`);
    super(scope, id, {
      code: lambda.Code.fromDockerBuild(dockerFilePath, {
        buildArgs: {
          PACKAGE_SUFFIX: constructBuildArgs(
            runtimeFamily,
            props?.includeExtras,
            props?.version,
          ),
        },
        // supports cross-platform docker build
        platform: getDockerPlatformNameFromArchitectures(
          compatibleArchitectures,
        ),
      }),
      layerVersionName: props?.layerVersionName
        ? props?.layerVersionName
        : undefined,
      license: 'MIT-0',
      compatibleRuntimes: getRuntimesFromRuntimeFamily(runtimeFamily),
      description:
        `Powertools for AWS Lambda (${languageName}) [${compatibleArchitecturesDescription}]${props?.includeExtras ? ' with extra dependencies' : ''
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
