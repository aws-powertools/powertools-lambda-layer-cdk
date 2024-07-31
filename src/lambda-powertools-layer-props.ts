import { aws_lambda as lambda } from 'aws-cdk-lib';
/**
 * Properties for Powertools for AWS Lambda (Python) Layer.
 */
export interface PowertoolsLayerProps {
  /**
     * The Powertools for AWS Lambda package version from pypi repository.
     */
  readonly version?: string;

  /**
     * A flag for the extras dependencies (pydantic, aws-xray-sdk, etc.)
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

  /**
     * The compatible architectures for the layer
     */
  readonly compatibleArchitectures?: lambda.Architecture[];

  /**
     * The Python version for Powertools for AWS Lambda (Python) V3.
    */
  readonly pythonVersion?: string;
}
