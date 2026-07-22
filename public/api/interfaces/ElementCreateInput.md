[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ElementCreateInput

# Interface: ElementCreateInput\<T\>

Defined in: [src/facade/types.ts:177](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L177)

Element 创建配置。

## Type Parameters

### T

`T` = `unknown`

新 Element 保存的业务数据类型。

## Properties

### data?

> `optional` **data?**: `T`

Defined in: [src/facade/types.ts:185](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L185)

调用方的业务数据。

***

### geometry

> **geometry**: [`ShapeInput`](../type-aliases/ShapeInput.md)

Defined in: [src/facade/types.ts:179](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L179)

几何输入；控制点可使用扁平坐标或嵌套坐标。

***

### id?

> `optional` **id?**: `string`

Defined in: [src/facade/types.ts:181](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L181)

Element ID；省略时由引擎自动生成。

***

### layerId?

> `optional` **layerId?**: `string`

Defined in: [src/facade/types.ts:189](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L189)

承载 Element 的矢量图层 ID。

***

### module?

> `optional` **module?**: `string`

Defined in: [src/facade/types.ts:187](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L187)

供查询和批量操作使用的业务模块标识。

***

### style?

> `optional` **style?**: [`StyleInput`](../type-aliases/StyleInput.md)

Defined in: [src/facade/types.ts:183](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L183)

结构化样式或原生 OpenLayers 样式。

***

### visible?

> `optional` **visible?**: `boolean`

Defined in: [src/facade/types.ts:191](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L191)

Element 创建后是否可见。
