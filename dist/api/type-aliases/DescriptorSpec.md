[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / DescriptorSpec

# Type Alias: DescriptorSpec\<T\>

> **DescriptorSpec**\<`T`\> = `object` & \{ `content`: readonly [`DescriptorListItem`](../interfaces/DescriptorListItem.md)[]; `type`: `"list"`; \} \| \{ `content`: `string` \| `HTMLElement`; `type`: `"custom"`; \}

Defined in: [src/facade/overlayTypes.ts:231](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L231)

Descriptor 的创建配置。

## Type Declaration

### close?

> `readonly` `optional` **close?**: `boolean`

是否显示内置关闭按钮。

### closeAction?

> `readonly` `optional` **closeAction?**: `"hide"` \| `"destroy"`

关闭时隐藏还是销毁 Descriptor。

### data?

> `readonly` `optional` **data?**: `T`

与 Descriptor 关联的业务数据快照。

### draggable?

> `readonly` `optional` **draggable?**: `boolean`

用户是否可以拖动 Descriptor。

### fixedLine?

> `readonly` `optional` **fixedLine?**: `boolean`

是否绘制定位点到 Descriptor 的连线。

### fixedLineColor?

> `readonly` `optional` **fixedLineColor?**: `string`

固定连线的 CSS 颜色。

### fixedMode?

> `readonly` `optional` **fixedMode?**: `"position"` \| `"pixel"`

拖拽后保持地图坐标还是屏幕像素位置。

### footer?

> `readonly` `optional` **footer?**: `string`

可选的底部文本。

### header?

> `readonly` `optional` **header?**: `string`

可选的标题文本。

### id?

> `readonly` `optional` **id?**: `string`

Descriptor ID；省略时由服务生成。

### offset?

> `readonly` `optional` **offset?**: [`Pixel`](Pixel.md)

相对定位坐标的偏移，单位为 CSS 像素。

### onClose?

> `readonly` `optional` **onClose?**: (`event`) => `void`

Descriptor 执行关闭行为时调用。

#### Parameters

##### event

[`DescriptorEvent`](../interfaces/DescriptorEvent.md)\<`T`\>

#### Returns

`void`

### onItemClick?

> `readonly` `optional` **onItemClick?**: (`event`) => `void`

用户点击列表项目时调用。

#### Parameters

##### event

[`DescriptorEvent`](../interfaces/DescriptorEvent.md)\<`T`\>

#### Returns

`void`

### position

> `readonly` **position**: [`Coordinate`](Coordinate.md)

Descriptor 的初始地图坐标。

## Type Parameters

### T

`T` = `unknown`

Descriptor 携带的业务数据类型。
