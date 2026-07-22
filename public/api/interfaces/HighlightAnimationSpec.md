[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / HighlightAnimationSpec

# Interface: HighlightAnimationSpec

Defined in: [src/core/animation/types.ts:95](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L95)

在闭合面上绘制稳定或呼吸高亮。

## Properties

### channel?

> `readonly` `optional` **channel?**: `string`

Defined in: [src/core/animation/types.ts:99](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L99)

独立控制这组动画的通道。

***

### color?

> `readonly` `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/animation/types.ts:103](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L103)

高亮填充和描边使用的颜色。

***

### fillOpacity?

> `readonly` `optional` **fillOpacity?**: `number`

Defined in: [src/core/animation/types.ts:105](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L105)

高亮填充相对颜色 alpha 的透明度乘数。

***

### mode?

> `readonly` `optional` **mode?**: `"steady"` \| `"breathe"`

Defined in: [src/core/animation/types.ts:101](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L101)

使用稳定高亮或周期性呼吸高亮。

***

### periodMs?

> `readonly` `optional` **periodMs?**: `number`

Defined in: [src/core/animation/types.ts:109](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L109)

呼吸高亮的单次周期，单位为毫秒。

***

### strokeWidth?

> `readonly` `optional` **strokeWidth?**: `number`

Defined in: [src/core/animation/types.ts:107](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L107)

高亮描边的像素宽度。

***

### type

> `readonly` **type**: `"highlight"`

Defined in: [src/core/animation/types.ts:97](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L97)

固定为高亮动画。
