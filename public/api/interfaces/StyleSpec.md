[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / StyleSpec

# Interface: StyleSpec

Defined in: [src/core/style/types.ts:365](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L365)

可序列化、可复制的结构化样式。

## Properties

### decorations?

> `optional` **decorations?**: [`ArrowDecorationSpec`](ArrowDecorationSpec.md)[]

Defined in: [src/core/style/types.ts:375](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L375)

沿线显示的箭头等附加内容。

***

### fill?

> `optional` **fill?**: [`SolidFillSpec`](SolidFillSpec.md) \| [`PatternFillSpec`](PatternFillSpec.md)

Defined in: [src/core/style/types.ts:371](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L371)

面图形使用的颜色或纹理。

***

### linework?

> `optional` **linework?**: [`LineworkSpec`](LineworkSpec.md)

Defined in: [src/core/style/types.ts:377](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L377)

沿开放路径或 Polygon 外环渲染的高级路径线饰。

***

### strokes?

> `optional` **strokes?**: [`StrokeSpec`](StrokeSpec.md)[]

Defined in: [src/core/style/types.ts:369](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L369)

可以叠加多层描边。

***

### symbol?

> `optional` **symbol?**: [`CircleSymbolSpec`](CircleSymbolSpec.md) \| [`IconSymbolSpec`](IconSymbolSpec.md)

Defined in: [src/core/style/types.ts:367](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L367)

Point 使用的圆形或图片样式。

***

### text?

> `optional` **text?**: [`TextSpec`](TextSpec.md)

Defined in: [src/core/style/types.ts:373](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L373)

Element 文字样式。

***

### zIndex?

> `optional` **zIndex?**: `number`

Defined in: [src/core/style/types.ts:379](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L379)

控制同一图层中样式的绘制顺序。
