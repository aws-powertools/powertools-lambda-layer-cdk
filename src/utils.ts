import { aws_lambda as lambda } from 'aws-cdk-lib';
import { Architecture } from 'aws-cdk-lib/aws-lambda';

export function getRuntimesFromRuntimeFamily(
  runtimeFamily: lambda.RuntimeFamily,
): lambda.Runtime[] | undefined {
  switch (runtimeFamily) {
    case lambda.RuntimeFamily.PYTHON:
      return [
        lambda.Runtime.PYTHON_3_8,
        lambda.Runtime.PYTHON_3_9,
        lambda.Runtime.PYTHON_3_10,
        lambda.Runtime.PYTHON_3_11,
        lambda.Runtime.PYTHON_3_12,
      ];
    case lambda.RuntimeFamily.NODEJS:
      return [
        lambda.Runtime.NODEJS_16_X,
        lambda.Runtime.NODEJS_18_X,
        lambda.Runtime.NODEJS_20_X,
      ];
    default:
      return [];
  }
}

export function getLanguageNameFromRuntimeFamily(
  runtimeFamily: lambda.RuntimeFamily,
): string {
  switch (runtimeFamily) {
    case lambda.RuntimeFamily.PYTHON:
      return 'Python';
    case lambda.RuntimeFamily.NODEJS:
      return 'TypeScript';
    default:
      return 'Unknown';
  }
}

// Docker expects a single string for the --platform option.
// getDockerPlatformNameFromArchitectures converts the Architecture enum to a string.
export function getDockerPlatformNameFromArchitectures(
  architectures: lambda.Architecture[],
): string {
  if (architectures.length == 1) {
    return architectures[0].dockerPlatform;
  } else {
    // if we have multiple architectures, we default to x86_64, hoping for the
    // layer not to have any architecture specific code or at least contain
    // binary code for all architectures
    return Architecture.X86_64.dockerPlatform;
  }
}

export function constructBuildArgs(
  runtimeFamily: lambda.RuntimeFamily,
  includeExtras: boolean | undefined,
  version: string | undefined,
): string {
  let suffix = '';
  switch (runtimeFamily) {
    case lambda.RuntimeFamily.PYTHON:
      if (includeExtras) {
        suffix = '[all]';
      }
      if (version) {
        if (version.startsWith('git')) {
          suffix = `${suffix} @ ${version}`;
        } else {
          suffix = `${suffix}==${version}`;
        }
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
