[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / FadeAnimationSpec

# Interface: FadeAnimationSpec

Defined in: [src/core/animation/types.ts:195](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L195)

让结构化图形整体渐显或渐隐。

## Properties

### channel?

> `readonly` `optional` **channel?**: `string`

Defined in: [src/core/animation/types.ts:199](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L199)

独立控制这组动画的通道。

***

### direction

> `readonly` **direction**: `"in"` \| `"out"`

Defined in: [src/core/animation/types.ts:201](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L201)

必须明确选择渐显或渐隐。

***

### durationMs?

> `readonly` `optional` **durationMs?**: `number`

Defined in: [src/core/animation/types.ts:203](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L203)

完整渐变一次的时长，单位为毫秒。

***

### easing?

> `readonly` `optional` **easing?**: [`AnimationEasing`](../type-aliases/AnimationEasing.md)

Defined in: [src/core/animation/types.ts:205](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L205)

透明度进度使用的缓动曲线。

***

### type

> `readonly` **type**: `"fade"`

Defined in: [src/core/animation/types.ts:197](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L197)

固定为渐变透明度动画。
