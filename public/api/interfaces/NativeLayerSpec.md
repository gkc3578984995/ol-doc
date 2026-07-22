[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / NativeLayerSpec

# Interface: NativeLayerSpec

Defined in: [src/facade/types.ts:158](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L158)

原生 OpenLayers 图层创建配置。

## Properties

### id?

> `optional` **id?**: `string`

Defined in: [src/facade/types.ts:162](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L162)

图层 ID。省略时由引擎自动生成。

***

### kind

> **kind**: `"native"`

Defined in: [src/facade/types.ts:160](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L160)

固定为 `native`。

***

### layer

> **layer**: `BaseLayer`

Defined in: [src/facade/types.ts:164](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L164)

调用方创建的 OpenLayers BaseLayer。

***

### ownership?

> `optional` **ownership?**: [`LayerOwnership`](../type-aliases/LayerOwnership.md)

Defined in: [src/facade/types.ts:166](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L166)

原生图层的所有权；默认为 `external`，只有 `earth` 会由 Earth 释放。
