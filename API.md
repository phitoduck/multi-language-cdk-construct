# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpecialBucket <a name="SpecialBucket" id="multi-language-construct-eric.SpecialBucket"></a>

#### Initializers <a name="Initializers" id="multi-language-construct-eric.SpecialBucket.Initializer"></a>

```typescript
import { SpecialBucket } from 'multi-language-construct-eric'

new SpecialBucket(scope: Construct, id: string, props: SpecialBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#multi-language-construct-eric.SpecialBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#multi-language-construct-eric.SpecialBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#multi-language-construct-eric.SpecialBucket.Initializer.parameter.props">props</a></code> | <code><a href="#multi-language-construct-eric.SpecialBucketProps">SpecialBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="multi-language-construct-eric.SpecialBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="multi-language-construct-eric.SpecialBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="multi-language-construct-eric.SpecialBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#multi-language-construct-eric.SpecialBucketProps">SpecialBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#multi-language-construct-eric.SpecialBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#multi-language-construct-eric.SpecialBucket.addTags">addTags</a></code> | Recursively apply tags to all resources declared in the construct. |

---

##### `toString` <a name="toString" id="multi-language-construct-eric.SpecialBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addTags` <a name="addTags" id="multi-language-construct-eric.SpecialBucket.addTags"></a>

```typescript
public addTags(): void
```

Recursively apply tags to all resources declared in the construct.

This function will need to be called again to apply tags to any
resources that are registered after the constructor finishes.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#multi-language-construct-eric.SpecialBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="multi-language-construct-eric.SpecialBucket.isConstruct"></a>

```typescript
import { SpecialBucket } from 'multi-language-construct-eric'

SpecialBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="multi-language-construct-eric.SpecialBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#multi-language-construct-eric.SpecialBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#multi-language-construct-eric.SpecialBucket.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="multi-language-construct-eric.SpecialBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="multi-language-construct-eric.SpecialBucket.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


## Structs <a name="Structs" id="Structs"></a>

### SpecialBucketProps <a name="SpecialBucketProps" id="multi-language-construct-eric.SpecialBucketProps"></a>

#### Initializer <a name="Initializer" id="multi-language-construct-eric.SpecialBucketProps.Initializer"></a>

```typescript
import { SpecialBucketProps } from 'multi-language-construct-eric'

const specialBucketProps: SpecialBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#multi-language-construct-eric.SpecialBucketProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="multi-language-construct-eric.SpecialBucketProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---



