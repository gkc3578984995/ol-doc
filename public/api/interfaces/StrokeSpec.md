[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / StrokeSpec

# Interface: StrokeSpec

Defined in: [src/core/style/types.ts:16](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L16)

描边、折线和文字轮廓共用的线条样式。

## Properties

### color?

> `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/style/types.ts:18](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L18)

线条使用的颜色。

***

### fitPatternOnce?

> `optional` **fitPatternOnce?**: `boolean`

Defined in: [src/core/style/types.ts:32](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L32)

让整组虚线刚好铺满路径。

***

### lineCap?

> `optional` **lineCap?**: `"square"` \| `"butt"` \| `"round"`

Defined in: [src/core/style/types.ts:26](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L26)

控制线条两端的形状。

***

### lineDash?

> `optional` **lineDash?**: `number`[]

Defined in: [src/core/style/types.ts:22](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L22)

按像素设置实线和空白的长度。

***

### lineDashOffset?

> `optional` **lineDashOffset?**: `number`

Defined in: [src/core/style/types.ts:24](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L24)

控制虚线从哪个位置开始。

***

### lineJoin?

> `optional` **lineJoin?**: `"round"` \| `"bevel"` \| `"miter"`

Defined in: [src/core/style/types.ts:28](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L28)

控制线段拐角的形状。

***

### miterLimit?

> `optional` **miterLimit?**: `number`

Defined in: [src/core/style/types.ts:30](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L30)

限制尖角可以延伸的长度。

***

### width?

> `optional` **width?**: `number`

Defined in: [src/core/style/types.ts:20](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L20)

线条的像素宽度。
