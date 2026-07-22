[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / LayerService

# Interface: LayerService

Defined in: [src/facade/types.ts:403](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L403)

创建、查询和管理当前 Earth 图层的公开服务。

## Methods

### add()

> **add**(`spec`): [`Layer`](../classes/Layer.md)

Defined in: [src/facade/types.ts:415](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L415)

创建图层。

#### Parameters

##### spec

[`PublicLayerSpec`](../type-aliases/PublicLayerSpec.md)

图层类型、数据源和展示配置。

#### Returns

[`Layer`](../classes/Layer.md)

新创建的图层句柄。

#### Example

```ts
const layer = earth.layers.add({ kind: 'vector', id: 'business' });
```

***

### clear()

> **clear**(): `void`

Defined in: [src/facade/types.ts:461](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L461)

清空全部图层。

#### Returns

`void`

#### Example

```ts
earth.layers.clear();
```

***

### get()

> **get**(`id`): [`Layer`](../classes/Layer.md) \| `undefined`

Defined in: [src/facade/types.ts:427](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L427)

按 ID 获取图层。

#### Parameters

##### id

`string`

要查找的唯一图层 ID。

#### Returns

[`Layer`](../classes/Layer.md) \| `undefined`

找到时返回图层句柄，否则返回 `undefined`。

#### Example

```ts
const layer = earth.layers.get('business');
```

***

### query()

> **query**(`kind?`): readonly [`Layer`](../classes/Layer.md)[]

Defined in: [src/facade/types.ts:439](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L439)

查询图层。

#### Parameters

##### kind?

[`LayerKind`](../type-aliases/LayerKind.md)

图层类型；省略时返回全部图层。

#### Returns

readonly [`Layer`](../classes/Layer.md)[]

符合条件的图层列表。

#### Example

```ts
const vectorLayers = earth.layers.query('vector');
```

***

### remove()

> **remove**(`id`): `boolean`

Defined in: [src/facade/types.ts:451](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L451)

按 ID 移除图层。

#### Parameters

##### id

`string`

待移除的图层 ID。

#### Returns

`boolean`

成功移除时返回 `true`，未找到时返回 `false`。

#### Example

```ts
earth.layers.remove('business');
```
