[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / GrowAnimationSpec

# Interface: GrowAnimationSpec

Defined in: [src/core/animation/types.ts:131](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L131)

从起点或终点逐步揭示路径和箭头。

## Properties

### channel?

> `readonly` `optional` **channel?**: `string`

Defined in: [src/core/animation/types.ts:135](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L135)

独立控制这组动画的通道。

***

### direction?

> `readonly` `optional` **direction?**: `"reverse"` \| `"forward"`

Defined in: [src/core/animation/types.ts:139](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L139)

选择从路径起点或终点开始揭示。

***

### durationMs?

> `readonly` `optional` **durationMs?**: `number`

Defined in: [src/core/animation/types.ts:137](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L137)

完整揭示一次的时长，单位为毫秒。

***

### easing?

> `readonly` `optional` **easing?**: [`AnimationEasing`](../type-aliases/AnimationEasing.md)

Defined in: [src/core/animation/types.ts:141](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L141)

揭示进度使用的缓动曲线。

***

### repeat?

> `readonly` `optional` **repeat?**: `boolean`

Defined in: [src/core/animation/types.ts:143](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L143)

完整揭示后是否重新开始。

***

### type

> `readonly` **type**: `"grow"`

Defined in: [src/core/animation/types.ts:133](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L133)

固定为生长动画。
