[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / DescriptorPatch

# Interface: DescriptorPatch\<T\>

Defined in: [src/facade/overlayTypes.ts:280](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L280)

Descriptor 的更新内容。

## Type Parameters

### T

`T` = `unknown`

Descriptor 携带的业务数据类型。

## Properties

### close?

> `readonly` `optional` **close?**: `boolean`

Defined in: [src/facade/overlayTypes.ts:292](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L292)

是否显示内置关闭按钮。

***

### closeAction?

> `readonly` `optional` **closeAction?**: `"hide"` \| `"destroy"`

Defined in: [src/facade/overlayTypes.ts:294](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L294)

关闭时隐藏还是销毁 Descriptor。

***

### content?

> `readonly` `optional` **content?**: [`DescriptorContent`](../type-aliases/DescriptorContent.md)

Defined in: [src/facade/overlayTypes.ts:282](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L282)

新的列表、文本或 DOM 内容。

***

### data?

> `readonly` `optional` **data?**: `T`

Defined in: [src/facade/overlayTypes.ts:308](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L308)

新的业务数据；显式传入 `undefined` 时清除。

***

### draggable?

> `readonly` `optional` **draggable?**: `boolean`

Defined in: [src/facade/overlayTypes.ts:300](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L300)

用户是否可以拖动 Descriptor。

***

### fixedLine?

> `readonly` `optional` **fixedLine?**: `boolean`

Defined in: [src/facade/overlayTypes.ts:302](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L302)

是否绘制定位点到 Descriptor 的连线。

***

### fixedLineColor?

> `readonly` `optional` **fixedLineColor?**: `string`

Defined in: [src/facade/overlayTypes.ts:304](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L304)

固定连线的新 CSS 颜色。

***

### fixedMode?

> `readonly` `optional` **fixedMode?**: `"position"` \| `"pixel"`

Defined in: [src/facade/overlayTypes.ts:306](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L306)

拖拽后保持地图坐标还是屏幕像素位置。

***

### footer?

> `readonly` `optional` **footer?**: `string`

Defined in: [src/facade/overlayTypes.ts:290](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L290)

新的底部文本；显式传入 `undefined` 时清除。

***

### header?

> `readonly` `optional` **header?**: `string`

Defined in: [src/facade/overlayTypes.ts:288](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L288)

新标题；显式传入 `undefined` 时清除。

***

### offset?

> `readonly` `optional` **offset?**: [`Pixel`](../type-aliases/Pixel.md)

Defined in: [src/facade/overlayTypes.ts:286](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L286)

相对定位坐标的新偏移，单位为 CSS 像素。

***

### onClose?

> `readonly` `optional` **onClose?**: (`event`) => `void`

Defined in: [src/facade/overlayTypes.ts:296](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L296)

新的关闭回调；显式传入 `undefined` 时清除。

#### Parameters

##### event

[`DescriptorEvent`](DescriptorEvent.md)\<`T`\>

#### Returns

`void`

***

### onItemClick?

> `readonly` `optional` **onItemClick?**: (`event`) => `void`

Defined in: [src/facade/overlayTypes.ts:298](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L298)

新的列表点击回调；显式传入 `undefined` 时清除。

#### Parameters

##### event

[`DescriptorEvent`](DescriptorEvent.md)\<`T`\>

#### Returns

`void`

***

### position?

> `readonly` `optional` **position?**: [`Coordinate`](../type-aliases/Coordinate.md)

Defined in: [src/facade/overlayTypes.ts:284](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L284)

新的地图坐标。
