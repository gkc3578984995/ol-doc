[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / OverlayPatch

# Interface: OverlayPatch\<T\>

Defined in: [src/facade/overlayTypes.ts:57](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L57)

Overlay 的更新内容。

## Type Parameters

### T

`T` = `unknown`

Overlay 携带的业务数据类型。

## Properties

### data?

> `readonly` `optional` **data?**: `T`

Defined in: [src/facade/overlayTypes.ts:69](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L69)

新的业务数据；显式传入 `undefined` 时清除数据。

***

### element?

> `readonly` `optional` **element?**: `HTMLElement`

Defined in: [src/facade/overlayTypes.ts:59](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L59)

替换当前展示的 HTML 元素；未同时指定所有权时按 `external` 处理。

***

### offset?

> `readonly` `optional` **offset?**: [`Pixel`](../type-aliases/Pixel.md)

Defined in: [src/facade/overlayTypes.ts:63](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L63)

相对定位坐标的新偏移，单位为 CSS 像素。

***

### ownership?

> `readonly` `optional` **ownership?**: [`OverlayOwnership`](../type-aliases/OverlayOwnership.md)

Defined in: [src/facade/overlayTypes.ts:71](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L71)

当前 DOM 元素的新所有权。

***

### position?

> `readonly` `optional` **position?**: [`Coordinate`](../type-aliases/Coordinate.md)

Defined in: [src/facade/overlayTypes.ts:61](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L61)

新的地图坐标；显式传入 `undefined` 时清除定位。

***

### positioning?

> `readonly` `optional` **positioning?**: [`OverlayPositioning`](../type-aliases/OverlayPositioning.md)

Defined in: [src/facade/overlayTypes.ts:65](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L65)

DOM 元素相对地图坐标的新锚点。

***

### visible?

> `readonly` `optional` **visible?**: `boolean`

Defined in: [src/facade/overlayTypes.ts:67](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L67)

Overlay 是否可见。
