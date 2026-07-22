[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / PatternFillSpec

# Interface: PatternFillSpec

Defined in: [src/core/style/types.ts:44](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L44)

由内置图案平铺而成的纹理填充。

## Properties

### backgroundColor?

> `optional` **backgroundColor?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/style/types.ts:58](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L58)

纹理空白区域使用的颜色。

***

### color?

> `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/style/types.ts:50](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L50)

纹理线条或圆点使用的颜色。

***

### dotRadius?

> `optional` **dotRadius?**: `number`

Defined in: [src/core/style/types.ts:56](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L56)

圆点纹理中每个点的像素半径。

***

### lineWidth?

> `optional` **lineWidth?**: `number`

Defined in: [src/core/style/types.ts:54](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L54)

纹理线条的像素宽度。

***

### pattern

> **pattern**: `"diagonal"` \| `"cross"` \| `"dot"` \| `"horizontal"` \| `"vertical"`

Defined in: [src/core/style/types.ts:48](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L48)

选择斜线、交叉线、圆点、横线或竖线。

***

### size?

> `optional` **size?**: `number`

Defined in: [src/core/style/types.ts:52](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L52)

一个纹理单元的像素大小。

***

### type

> **type**: `"pattern"`

Defined in: [src/core/style/types.ts:46](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L46)

固定为纹理填充。
