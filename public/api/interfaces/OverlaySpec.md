[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / OverlaySpec

# Interface: OverlaySpec\<T\>

Defined in: [src/facade/overlayTypes.ts:25](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L25)

Overlay 的创建配置。

## Type Parameters

### T

`T` = `unknown`

Overlay 携带的业务数据类型。

## Properties

### autoPan?

> `readonly` `optional` **autoPan?**: `boolean` \| [`PanIntoViewSpec`](PanIntoViewSpec.md)

Defined in: [src/facade/overlayTypes.ts:41](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L41)

定位后是否自动平移 View，使 Overlay 进入可视区域。

***

### className?

> `readonly` `optional` **className?**: `string`

Defined in: [src/facade/overlayTypes.ts:43](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L43)

附加到 OpenLayers Overlay 容器的类名。

***

### data?

> `readonly` `optional` **data?**: `T`

Defined in: [src/facade/overlayTypes.ts:47](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L47)

与 Overlay 关联的业务数据快照。

***

### element

> `readonly` **element**: `HTMLElement`

Defined in: [src/facade/overlayTypes.ts:29](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L29)

Overlay 展示的 HTML 元素。

***

### id?

> `readonly` `optional` **id?**: `string`

Defined in: [src/facade/overlayTypes.ts:27](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L27)

Overlay ID；省略时由服务生成。

***

### insertFirst?

> `readonly` `optional` **insertFirst?**: `boolean`

Defined in: [src/facade/overlayTypes.ts:39](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L39)

是否将 Overlay 插入容器首位。

***

### module?

> `readonly` `optional` **module?**: `string`

Defined in: [src/facade/overlayTypes.ts:45](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L45)

供查询和批量管理使用的业务模块标识。

***

### offset?

> `readonly` `optional` **offset?**: [`Pixel`](../type-aliases/Pixel.md)

Defined in: [src/facade/overlayTypes.ts:33](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L33)

相对定位坐标的偏移，单位为 CSS 像素。

***

### ownership?

> `readonly` `optional` **ownership?**: [`OverlayOwnership`](../type-aliases/OverlayOwnership.md)

Defined in: [src/facade/overlayTypes.ts:49](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L49)

DOM 所有权；默认为 `external`，只有 `earth` 会在销毁时移除元素。

***

### position?

> `readonly` `optional` **position?**: [`Coordinate`](../type-aliases/Coordinate.md)

Defined in: [src/facade/overlayTypes.ts:31](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L31)

初始地图坐标；省略时 Overlay 保持隐藏。

***

### positioning?

> `readonly` `optional` **positioning?**: [`OverlayPositioning`](../type-aliases/OverlayPositioning.md)

Defined in: [src/facade/overlayTypes.ts:35](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L35)

DOM 元素相对地图坐标的锚点。

***

### stopEvent?

> `readonly` `optional` **stopEvent?**: `boolean`

Defined in: [src/facade/overlayTypes.ts:37](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L37)

Overlay 上的 DOM 事件是否阻止地图交互。
