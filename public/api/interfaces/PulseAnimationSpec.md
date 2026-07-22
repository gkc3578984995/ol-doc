[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / PulseAnimationSpec

# Interface: PulseAnimationSpec

Defined in: [src/core/animation/types.ts:13](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L13)

Point 周期性向外扩散的脉冲动画。

## Properties

### channel?

> `readonly` `optional` **channel?**: `string`

Defined in: [src/core/animation/types.ts:17](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L17)

独立控制这组动画的通道。

***

### color?

> `readonly` `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/animation/types.ts:21](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L21)

脉冲扩散时使用的颜色。

***

### periodMs?

> `readonly` `optional` **periodMs?**: `number`

Defined in: [src/core/animation/types.ts:19](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L19)

单次脉冲周期，单位为毫秒。

***

### radius?

> `readonly` `optional` **radius?**: `number`

Defined in: [src/core/animation/types.ts:25](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L25)

脉冲起始的像素半径；动画在此基础上继续向外扩散。

***

### repeat?

> `readonly` `optional` **repeat?**: `boolean`

Defined in: [src/core/animation/types.ts:23](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L23)

完成后是否重新开始。

***

### type

> `readonly` **type**: `"pulse"`

Defined in: [src/core/animation/types.ts:15](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L15)

固定为脉冲动画。
