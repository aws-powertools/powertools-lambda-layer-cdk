# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaPowertoolsLayer <a name="LambdaPowertoolsLayer" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer"></a>

Defines a new Lambda Layer with Powertools for AWS Lambda (Python) library.

#### Initializers <a name="Initializers" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.Initializer"></a>

```typescript
import { LambdaPowertoolsLayer } from 'cdk-aws-lambda-powertools-layer'

new LambdaPowertoolsLayer(scope: Construct, id: string, props?: PowertoolsLayerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-aws-lambda-powertools-layer.PowertoolsLayerProps">PowertoolsLayerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-aws-lambda-powertools-layer.PowertoolsLayerProps">PowertoolsLayerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.addPermission">addPermission</a></code> | Add permission for this layer version to specific entities. |

---

##### `toString` <a name="toString" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addPermission` <a name="addPermission" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.addPermission"></a>

```typescript
public addPermission(id: string, permission: LayerVersionPermission): void
```

Add permission for this layer version to specific entities.

Usage within
the same account where the layer is defined is always allowed and does not
require calling this method. Note that the principal that creates the
Lambda function using the layer (for example, a CloudFormation changeset
execution role) also needs to have the ``lambda:GetLayerVersion``
permission on the layer version.

###### `id`<sup>Required</sup> <a name="id" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.addPermission.parameter.id"></a>

- *Type:* string

---

###### `permission`<sup>Required</sup> <a name="permission" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.LayerVersionPermission

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.fromLayerVersionArn">fromLayerVersionArn</a></code> | Imports a layer version by ARN. |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.fromLayerVersionAttributes">fromLayerVersionAttributes</a></code> | Imports a Layer that has been defined externally. |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.constructBuildArgs">constructBuildArgs</a></code> | creates build argument for the Dockerfile. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.isConstruct"></a>

```typescript
import { LambdaPowertoolsLayer } from 'cdk-aws-lambda-powertools-layer'

LambdaPowertoolsLayer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.isOwnedResource"></a>

```typescript
import { LambdaPowertoolsLayer } from 'cdk-aws-lambda-powertools-layer'

LambdaPowertoolsLayer.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.isResource"></a>

```typescript
import { LambdaPowertoolsLayer } from 'cdk-aws-lambda-powertools-layer'

LambdaPowertoolsLayer.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLayerVersionArn` <a name="fromLayerVersionArn" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.fromLayerVersionArn"></a>

```typescript
import { LambdaPowertoolsLayer } from 'cdk-aws-lambda-powertools-layer'

LambdaPowertoolsLayer.fromLayerVersionArn(scope: Construct, id: string, layerVersionArn: string)
```

Imports a layer version by ARN.

Assumes it is compatible with all Lambda runtimes.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.fromLayerVersionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.fromLayerVersionArn.parameter.id"></a>

- *Type:* string

---

###### `layerVersionArn`<sup>Required</sup> <a name="layerVersionArn" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.fromLayerVersionArn.parameter.layerVersionArn"></a>

- *Type:* string

---

##### `fromLayerVersionAttributes` <a name="fromLayerVersionAttributes" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.fromLayerVersionAttributes"></a>

```typescript
import { LambdaPowertoolsLayer } from 'cdk-aws-lambda-powertools-layer'

LambdaPowertoolsLayer.fromLayerVersionAttributes(scope: Construct, id: string, attrs: LayerVersionAttributes)
```

Imports a Layer that has been defined externally.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.fromLayerVersionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

the parent Construct that will use the imported layer.

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.fromLayerVersionAttributes.parameter.id"></a>

- *Type:* string

the id of the imported layer in the construct tree.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.fromLayerVersionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.LayerVersionAttributes

the properties of the imported layer.

---

##### `constructBuildArgs` <a name="constructBuildArgs" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.constructBuildArgs"></a>

```typescript
import { LambdaPowertoolsLayer } from 'cdk-aws-lambda-powertools-layer'

LambdaPowertoolsLayer.constructBuildArgs(runtimeFamily: RuntimeFamily, includeExtras?: boolean, version?: string)
```

creates build argument for the Dockerfile.

There are multiple combinations between version and extras package that results in different suffix for the installation.
With and without version, with and without extras flag.
We construct one suffix here because it is easier to do in code than inside the Dockerfile with bash commands.
For example, if we set `includeExtras=true` and `version=1.22.0` we get '[all]==1.22.0'.

###### `runtimeFamily`<sup>Required</sup> <a name="runtimeFamily" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.constructBuildArgs.parameter.runtimeFamily"></a>

- *Type:* aws-cdk-lib.aws_lambda.RuntimeFamily

---

###### `includeExtras`<sup>Optional</sup> <a name="includeExtras" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.constructBuildArgs.parameter.includeExtras"></a>

- *Type:* boolean

---

###### `version`<sup>Optional</sup> <a name="version" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.constructBuildArgs.parameter.version"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.property.layerVersionArn">layerVersionArn</a></code> | <code>string</code> | The ARN of the Lambda Layer version that this Layer defines. |
| <code><a href="#cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime[]</code> | The runtimes compatible with this Layer. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `layerVersionArn`<sup>Required</sup> <a name="layerVersionArn" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.property.layerVersionArn"></a>

```typescript
public readonly layerVersionArn: string;
```

- *Type:* string

The ARN of the Lambda Layer version that this Layer defines.

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="cdk-aws-lambda-powertools-layer.LambdaPowertoolsLayer.property.compatibleRuntimes"></a>

```typescript
public readonly compatibleRuntimes: Runtime[];
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime[]

The runtimes compatible with this Layer.

---


## Structs <a name="Structs" id="Structs"></a>

### PowertoolsLayerProps <a name="PowertoolsLayerProps" id="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps"></a>

Properties for Powertools for AWS Lambda (Python) Layer.

#### Initializer <a name="Initializer" id="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.Initializer"></a>

```typescript
import { PowertoolsLayerProps } from 'cdk-aws-lambda-powertools-layer'

const powertoolsLayerProps: PowertoolsLayerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.compatibleArchitectures">compatibleArchitectures</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture[]</code> | The compatible architectures for the layer. |
| <code><a href="#cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.includeExtras">includeExtras</a></code> | <code>boolean</code> | A flag for the extras dependencies (pydantic, aws-xray-sdk, etc.) This will increase the size of the layer significantly. If you don't use parsing, ignore it. |
| <code><a href="#cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.layerVersionName">layerVersionName</a></code> | <code>string</code> | the name of the layer, will be randomised if empty. |
| <code><a href="#cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.runtimeFamily">runtimeFamily</a></code> | <code>aws-cdk-lib.aws_lambda.RuntimeFamily</code> | the runtime of the layer. |
| <code><a href="#cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.version">version</a></code> | <code>string</code> | The Powertools for AWS Lambda package version from pypi repository. |

---

##### `compatibleArchitectures`<sup>Optional</sup> <a name="compatibleArchitectures" id="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.compatibleArchitectures"></a>

```typescript
public readonly compatibleArchitectures: Architecture[];
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture[]

The compatible architectures for the layer.

---

##### `includeExtras`<sup>Optional</sup> <a name="includeExtras" id="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.includeExtras"></a>

```typescript
public readonly includeExtras: boolean;
```

- *Type:* boolean

A flag for the extras dependencies (pydantic, aws-xray-sdk, etc.) This will increase the size of the layer significantly. If you don't use parsing, ignore it.

---

##### `layerVersionName`<sup>Optional</sup> <a name="layerVersionName" id="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.layerVersionName"></a>

```typescript
public readonly layerVersionName: string;
```

- *Type:* string

the name of the layer, will be randomised if empty.

---

##### `runtimeFamily`<sup>Optional</sup> <a name="runtimeFamily" id="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.runtimeFamily"></a>

```typescript
public readonly runtimeFamily: RuntimeFamily;
```

- *Type:* aws-cdk-lib.aws_lambda.RuntimeFamily

the runtime of the layer.

---

##### `version`<sup>Optional</sup> <a name="version" id="cdk-aws-lambda-powertools-layer.PowertoolsLayerProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Powertools for AWS Lambda package version from pypi repository.

---



