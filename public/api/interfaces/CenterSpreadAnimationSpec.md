[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / CenterSpreadAnimationSpec

# Interface: CenterSpreadAnimationSpec

Defined in: [src/core/animation/types.ts:171](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L171)

从圆形或扇面中心向外绘制带尾迹的扩散波纹。

## Properties

### channel?

> `readonly` `optional` **channel?**: `string`

Defined in: [src/core/animation/types.ts:175](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L175)

独立控制这组动画的通道。

***

### color?

> `readonly` `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/animation/types.ts:179](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L179)

扩散波纹使用的纯色；全部可见波纹带保持同一透明度，不能和 `gradient` 同时设置。

***

### gradient?

> `readonly` `optional` **gradient?**: readonly readonly \[`number`, [`Color`](../type-aliases/Color.md)\][]

Defined in: [src/core/animation/types.ts:181](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L181)

从内侧最旧尾迹 `0` 到外侧波纹前沿 `1` 的颜色渐变；同时保留尾迹与传播进度透明度衰减，不能和 `color` 同时设置。

***

### opacity?

> `readonly` `optional` **opacity?**: `number`

Defined in: [src/core/animation/types.ts:183](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L183)

扩散波纹相对颜色 alpha 的透明度乘数；纯色模式在整个传播生命周期内恒定应用。

***

### periodMs?

> `readonly` `optional` **periodMs?**: `number`

Defined in: [src/core/animation/types.ts:177](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L177)

单个扩散环从中心传播到外半径的时长，单位为毫秒。

***

### repeat?

> `readonly` `optional` **repeat?**: `boolean`

Defined in: [src/core/animation/types.ts:191](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L191)

所有环完成一轮传播后是否重新开始。

***

### ringCount?

> `readonly` `optional` **ringCount?**: `number`

Defined in: [src/core/animation/types.ts:189](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L189)

同时错峰传播的固定环数量。

***

### strokeWidth?

> `readonly` `optional` **strokeWidth?**: `number`

Defined in: [src/core/animation/types.ts:187](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L187)

波纹前沿环或弧的像素宽度。

***

### trailLength?

> `readonly` `optional` **trailLength?**: `number`

Defined in: [src/core/animation/types.ts:185](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L185)

尾迹宽度占目标外半径的比例；`0` 退化为仅绘制前沿环或弧。

***

### type

> `readonly` **type**: `"center-spread"`

Defined in: [src/core/animation/types.ts:173](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L173)

固定为中心扩散动画。
