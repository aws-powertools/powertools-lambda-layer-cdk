# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### LambdaPowertoolsLayer <a name="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer" id="cdkawslambdapowertoolslayerlambdapowertoolslayer"></a>

Defines a new Lambda Layer with Powertools for python library.

#### Initializers <a name="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.Initializer" id="cdkawslambdapowertoolslayerlambdapowertoolslayerinitializer"></a>

```typescript
import { LambdaPowertoolsLayer } from 'cdk-aws-lambda-powertools-layer'

new LambdaPowertoolsLayer(scope: Construct, id: string, props?: PowertoolsLayerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkawslambdapowertoolslayerlambdapowertoolslayerparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkawslambdapowertoolslayerlambdapowertoolslayerparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkawslambdapowertoolslayerlambdapowertoolslayerparameterprops) | [`cdk-aws-lambda-powertools-layer.PowertoolsLayerProps`](#cdk-aws-lambda-powertools-layer.PowertoolsLayerProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.parameter.scope" id="cdkawslambdapowertoolslayerlambdapowertoolslayerparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.parameter.id" id="cdkawslambdapowertoolslayerlambdapowertoolslayerparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.parameter.props" id="cdkawslambdapowertoolslayerlambdapowertoolslayerparameterprops"></a>

- *Type:* [`cdk-aws-lambda-powertools-layer.PowertoolsLayerProps`](#cdk-aws-lambda-powertools-layer.PowertoolsLayerProps)

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`constructBuildArgs`](#cdkawslambdapowertoolslayerlambdapowertoolslayerconstructbuildargs) | creates build argument for the Dockerfile. |

---

##### `constructBuildArgs` <a name="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.constructBuildArgs" id="cdkawslambdapowertoolslayerlambdapowertoolslayerconstructbuildargs"></a>

```typescript
import { LambdaPowertoolsLayer } from 'cdk-aws-lambda-powertools-layer'

LambdaPowertoolsLayer.constructBuildArgs(runtimeFamily: RuntimeFamily, includeExtras?: boolean, version?: string)
```

###### `runtimeFamily`<sup>Required</sup> <a name="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.parameter.runtimeFamily" id="cdkawslambdapowertoolslayerlambdapowertoolslayerparameterruntimefamily"></a>

- *Type:* [`aws-cdk-lib.aws_lambda.RuntimeFamily`](#aws-cdk-lib.aws_lambda.RuntimeFamily)

---

###### `includeExtras`<sup>Optional</sup> <a name="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.parameter.includeExtras" id="cdkawslambdapowertoolslayerlambdapowertoolslayerparameterincludeextras"></a>

- *Type:* `boolean`

---

###### `version`<sup>Optional</sup> <a name="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.parameter.version" id="cdkawslambdapowertoolslayerlambdapowertoolslayerparameterversion"></a>

- *Type:* `string`

---



## Structs <a name="Structs" id="structs"></a>

### PowertoolsLayerProps <a name="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps" id="cdkawslambdapowertoolslayerpowertoolslayerprops"></a>

Properties for Powertools layer for python.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PowertoolsLayerProps } from 'cdk-aws-lambda-powertools-layer'

const powertoolsLayerProps: PowertoolsLayerProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`includeExtras`](#cdkawslambdapowertoolslayerpowertoolslayerpropspropertyincludeextras) | `boolean` | A flag for the pydantic extras dependency, used for parsing. |
| [`layerVersionName`](#cdkawslambdapowertoolslayerpowertoolslayerpropspropertylayerversionname) | `string` | the name of the layer, will be randomised if empty. |
| [`runtimeFamily`](#cdkawslambdapowertoolslayerpowertoolslayerpropspropertyruntimefamily) | [`aws-cdk-lib.aws_lambda.RuntimeFamily`](#aws-cdk-lib.aws_lambda.RuntimeFamily) | the runtime of the layer. |
| [`version`](#cdkawslambdapowertoolslayerpowertoolslayerpropspropertyversion) | `string` | The powertools package version from pypi repository. |

---

##### `includeExtras`<sup>Optional</sup> <a name="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.includeExtras" id="cdkawslambdapowertoolslayerpowertoolslayerpropspropertyincludeextras"></a>

```typescript
public readonly includeExtras: boolean;
```

- *Type:* `boolean`

A flag for the pydantic extras dependency, used for parsing.

This will increase the size of the layer significantly. If you don't use parsing, ignore it.

---

##### `layerVersionName`<sup>Optional</sup> <a name="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.layerVersionName" id="cdkawslambdapowertoolslayerpowertoolslayerpropspropertylayerversionname"></a>

```typescript
public readonly layerVersionName: string;
```

- *Type:* `string`

the name of the layer, will be randomised if empty.

---

##### `runtimeFamily`<sup>Optional</sup> <a name="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.runtimeFamily" id="cdkawslambdapowertoolslayerpowertoolslayerpropspropertyruntimefamily"></a>

```typescript
public readonly runtimeFamily: RuntimeFamily;
```

- *Type:* [`aws-cdk-lib.aws_lambda.RuntimeFamily`](#aws-cdk-lib.aws_lambda.RuntimeFamily)

the runtime of the layer.

---

##### `version`<sup>Optional</sup> <a name="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.version" id="cdkawslambdapowertoolslayerpowertoolslayerpropspropertyversion"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

The powertools package version from pypi repository.

---



