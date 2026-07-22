[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ArrowDecorationSpec

# Interface: ArrowDecorationSpec

Defined in: [src/core/style/types.ts:162](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L162)

沿线放置的箭头装饰。

## Properties

### offset?

> `optional` **offset?**: `number`

Defined in: [src/core/style/types.ts:170](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L170)

重复放置箭头时，设置第一个箭头距起点的像素距离。

***

### placement

> **placement**: `"repeat"` \| `"end"` \| `"start"` \| `"each-segment"`

Defined in: [src/core/style/types.ts:166](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L166)

选择起点、终点、每段或重复放置。

***

### spacing?

> `optional` **spacing?**: `number`

Defined in: [src/core/style/types.ts:172](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L172)

重复放置箭头时，设置相邻箭头的像素距离。

***

### symbol?

> `optional` **symbol?**: [`IconSymbolSpec`](IconSymbolSpec.md)

Defined in: [src/core/style/types.ts:168](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L168)

自定义箭头使用的图片符号。

***

### type

> **type**: `"arrow"`

Defined in: [src/core/style/types.ts:164](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L164)

固定为箭头装饰。
