[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ElementState

# Interface: ElementState\<T\>

Defined in: [src/core/element/types.ts:9](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L9)

Element 的规范业务状态，包含几何、样式和业务信息。

## Type Parameters

### T

`T` = `unknown`

Element 携带的业务数据类型。

## Properties

### data?

> `readonly` `optional` **data?**: `T`

Defined in: [src/core/element/types.ts:19](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L19)

调用方附加的业务数据。

***

### geometry

> `readonly` **geometry**: [`ShapeState`](../type-aliases/ShapeState.md)

Defined in: [src/core/element/types.ts:15](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L15)

与 OpenLayers 无关的规范几何状态。

***

### id

> `readonly` **id**: `string`

Defined in: [src/core/element/types.ts:11](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L11)

当前 Earth 内唯一的 Element ID。

***

### layerId

> `readonly` **layerId**: `string`

Defined in: [src/core/element/types.ts:23](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L23)

渲染图层 ID。

***

### module?

> `readonly` `optional` **module?**: `string`

Defined in: [src/core/element/types.ts:21](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L21)

业务模块分组。

***

### style

> `readonly` **style**: [`ElementStyleState`](../type-aliases/ElementStyleState.md)

Defined in: [src/core/element/types.ts:17](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L17)

结构化样式或受控原生样式引用。

***

### type

> `readonly` **type**: `"triangle"` \| `"circle"` \| `"ellipse"` \| `"polygon"` \| `"polyline"` \| `"point"` \| `"attack-arrow"` \| `"tailed-attack-arrow"` \| `"fine-arrow"` \| `"tailed-squad-combat-arrow"` \| `"assault-direction-arrow"` \| `"double-arrow"` \| `"rectangle"` \| `"equilateral-triangle"` \| `"assemble-polygon"` \| `"closed-curve-polygon"` \| `"sector"` \| `"lune-polygon"` \| `"lune-polyline"` \| `"curve-polyline"`

Defined in: [src/core/element/types.ts:13](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L13)

图形类型。

***

### visible

> `readonly` **visible**: `boolean`

Defined in: [src/core/element/types.ts:25](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L25)

业务可见状态。
