# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### LambdaPowertoolsLayer <a name="cdk-lambda-powertools-python-layer.LambdaPowertoolsLayer" id="cdklambdapowertoolspythonlayerlambdapowertoolslayer"></a>

Defines a new Lambda Layer with Powertools for python library.

#### Initializers <a name="cdk-lambda-powertools-python-layer.LambdaPowertoolsLayer.Initializer" id="cdklambdapowertoolspythonlayerlambdapowertoolslayerinitializer"></a>

```typescript
import { LambdaPowertoolsLayer } from 'cdk-lambda-powertools-python-layer'

new LambdaPowertoolsLayer(scope: Construct, id: string, props?: PowertoolsLayerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdklambdapowertoolspythonlayerlambdapowertoolslayerparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdklambdapowertoolspythonlayerlambdapowertoolslayerparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdklambdapowertoolspythonlayerlambdapowertoolslayerparameterprops) | [`cdk-lambda-powertools-python-layer.PowertoolsLayerProps`](#cdk-lambda-powertools-python-layer.PowertoolsLayerProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-lambda-powertools-python-layer.LambdaPowertoolsLayer.parameter.scope" id="cdklambdapowertoolspythonlayerlambdapowertoolslayerparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-lambda-powertools-python-layer.LambdaPowertoolsLayer.parameter.id" id="cdklambdapowertoolspythonlayerlambdapowertoolslayerparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="cdk-lambda-powertools-python-layer.LambdaPowertoolsLayer.parameter.props" id="cdklambdapowertoolspythonlayerlambdapowertoolslayerparameterprops"></a>

- *Type:* [`cdk-lambda-powertools-python-layer.PowertoolsLayerProps`](#cdk-lambda-powertools-python-layer.PowertoolsLayerProps)

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`constructBuildArgs`](#cdklambdapowertoolspythonlayerlambdapowertoolslayerconstructbuildargs) | creates build argument for the Dockerfile. |

---

##### `constructBuildArgs` <a name="cdk-lambda-powertools-python-layer.LambdaPowertoolsLayer.constructBuildArgs" id="cdklambdapowertoolspythonlayerlambdapowertoolslayerconstructbuildargs"></a>

```typescript
import { LambdaPowertoolsLayer } from 'cdk-lambda-powertools-python-layer'

LambdaPowertoolsLayer.constructBuildArgs(runtimeFamily: RuntimeFamily, includeExtras?: boolean, version?: string)
```

###### `runtimeFamily`<sup>Required</sup> <a name="cdk-lambda-powertools-python-layer.LambdaPowertoolsLayer.parameter.runtimeFamily" id="cdklambdapowertoolspythonlayerlambdapowertoolslayerparameterruntimefamily"></a>

- *Type:* [`aws-cdk-lib.aws_lambda.RuntimeFamily`](#aws-cdk-lib.aws_lambda.RuntimeFamily)

---

###### `includeExtras`<sup>Optional</sup> <a name="cdk-lambda-powertools-python-layer.LambdaPowertoolsLayer.parameter.includeExtras" id="cdklambdapowertoolspythonlayerlambdapowertoolslayerparameterincludeextras"></a>

- *Type:* `boolean`

---

###### `version`<sup>Optional</sup> <a name="cdk-lambda-powertools-python-layer.LambdaPowertoolsLayer.parameter.version" id="cdklambdapowertoolspythonlayerlambdapowertoolslayerparameterversion"></a>

- *Type:* `string`

---



## Structs <a name="Structs" id="structs"></a>

### PowertoolsLayerProps <a name="cdk-lambda-powertools-python-layer.PowertoolsLayerProps" id="cdklambdapowertoolspythonlayerpowertoolslayerprops"></a>

Properties for Powertools layer for python.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PowertoolsLayerProps } from 'cdk-lambda-powertools-python-layer'

const powertoolsLayerProps: PowertoolsLayerProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`includeExtras`](#cdklambdapowertoolspythonlayerpowertoolslayerpropspropertyincludeextras) | `boolean` | A flag for the pydantic extras dependency, used for parsing. |
| [`layerVersionName`](#cdklambdapowertoolspythonlayerpowertoolslayerpropspropertylayerversionname) | `string` | the name of the layer, will be randomised if empty. |
| [`runtimeFamily`](#cdklambdapowertoolspythonlayerpowertoolslayerpropspropertyruntimefamily) | [`aws-cdk-lib.aws_lambda.RuntimeFamily`](#aws-cdk-lib.aws_lambda.RuntimeFamily) | the runtime of the layer. |
| [`version`](#cdklambdapowertoolspythonlayerpowertoolslayerpropspropertyversion) | `string` | The powertools package version from pypi repository. |

---

##### `includeExtras`<sup>Optional</sup> <a name="cdk-lambda-powertools-python-layer.PowertoolsLayerProps.property.includeExtras" id="cdklambdapowertoolspythonlayerpowertoolslayerpropspropertyincludeextras"></a>

```typescript
public readonly includeExtras: boolean;
```

- *Type:* `boolean`

A flag for the pydantic extras dependency, used for parsing.

This will increase the size of the layer significantly. If you don't use parsing, ignore it.

---

##### `layerVersionName`<sup>Optional</sup> <a name="cdk-lambda-powertools-python-layer.PowertoolsLayerProps.property.layerVersionName" id="cdklambdapowertoolspythonlayerpowertoolslayerpropspropertylayerversionname"></a>

```typescript
public readonly layerVersionName: string;
```

- *Type:* `string`

the name of the layer, will be randomised if empty.

---

##### `runtimeFamily`<sup>Optional</sup> <a name="cdk-lambda-powertools-python-layer.PowertoolsLayerProps.property.runtimeFamily" id="cdklambdapowertoolspythonlayerpowertoolslayerpropspropertyruntimefamily"></a>

```typescript
public readonly runtimeFamily: RuntimeFamily;
```

- *Type:* [`aws-cdk-lib.aws_lambda.RuntimeFamily`](#aws-cdk-lib.aws_lambda.RuntimeFamily)

the runtime of the layer.

---

##### `version`<sup>Optional</sup> <a name="cdk-lambda-powertools-python-layer.PowertoolsLayerProps.property.version" id="cdklambdapowertoolspythonlayerpowertoolslayerpropspropertyversion"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

The powertools package version from pypi repository.

---



