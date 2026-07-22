[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / PathGlyphStrokeSpec

# Interface: PathGlyphStrokeSpec

Defined in: [src/core/style/types.ts:176](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L176)

路径线饰中不会产生虚线的端帽与装饰描边。

## Properties

### color?

> `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/style/types.ts:178](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L178)

描边颜色。

***

### lineCap?

> `optional` **lineCap?**: `"square"` \| `"butt"` \| `"round"`

Defined in: [src/core/style/types.ts:182](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L182)

控制开放线段两端的形状。

***

### lineJoin?

> `optional` **lineJoin?**: `"round"` \| `"bevel"` \| `"miter"`

Defined in: [src/core/style/types.ts:184](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L184)

控制相邻线段拐角的形状。

***

### miterLimit?

> `optional` **miterLimit?**: `number`

Defined in: [src/core/style/types.ts:186](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L186)

限制尖角可以延伸的长度。

***

### width?

> `optional` **width?**: `number`

Defined in: [src/core/style/types.ts:180](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L180)

描边宽度，单位为 CSS 像素。
