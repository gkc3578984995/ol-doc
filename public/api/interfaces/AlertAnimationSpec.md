[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / AlertAnimationSpec

# Interface: AlertAnimationSpec

Defined in: [src/core/animation/types.ts:113](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L113)

在闭合面上绘制固定双峰节奏的告警。

## Properties

### channel?

> `readonly` `optional` **channel?**: `string`

Defined in: [src/core/animation/types.ts:117](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L117)

独立控制这组动画的通道。

***

### color?

> `readonly` `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/animation/types.ts:121](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L121)

告警填充、描边和光晕使用的颜色。

***

### fillOpacity?

> `readonly` `optional` **fillOpacity?**: `number`

Defined in: [src/core/animation/types.ts:123](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L123)

告警填充相对颜色 alpha 的透明度乘数。

***

### periodMs?

> `readonly` `optional` **periodMs?**: `number`

Defined in: [src/core/animation/types.ts:119](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L119)

单次告警周期，单位为毫秒。

***

### repeat?

> `readonly` `optional` **repeat?**: `boolean`

Defined in: [src/core/animation/types.ts:127](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L127)

完成一个告警周期后是否重新开始。

***

### strokeWidth?

> `readonly` `optional` **strokeWidth?**: `number`

Defined in: [src/core/animation/types.ts:125](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L125)

告警描边的像素宽度。

***

### type

> `readonly` **type**: `"alert"`

Defined in: [src/core/animation/types.ts:115](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L115)

固定为告警动画。
