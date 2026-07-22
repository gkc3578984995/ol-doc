[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / BlinkAnimationSpec

# Interface: BlinkAnimationSpec

Defined in: [src/core/animation/types.ts:77](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L77)

让结构化图形按固定占空比阶跃闪烁。

## Properties

### channel?

> `readonly` `optional` **channel?**: `string`

Defined in: [src/core/animation/types.ts:81](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L81)

独立控制这组动画的通道。

***

### dutyCycle?

> `readonly` `optional` **dutyCycle?**: `number`

Defined in: [src/core/animation/types.ts:85](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L85)

每周期保持最大透明度的比例。

***

### maxOpacity?

> `readonly` `optional` **maxOpacity?**: `number`

Defined in: [src/core/animation/types.ts:89](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L89)

闪烁高位使用的整体透明度乘数。

***

### minOpacity?

> `readonly` `optional` **minOpacity?**: `number`

Defined in: [src/core/animation/types.ts:87](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L87)

闪烁低位使用的整体透明度乘数。

***

### periodMs?

> `readonly` `optional` **periodMs?**: `number`

Defined in: [src/core/animation/types.ts:83](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L83)

单次闪烁周期，单位为毫秒。

***

### repeat?

> `readonly` `optional` **repeat?**: `boolean`

Defined in: [src/core/animation/types.ts:91](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L91)

完成一个周期后是否重新开始。

***

### type

> `readonly` **type**: `"blink"`

Defined in: [src/core/animation/types.ts:79](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L79)

固定为闪烁动画。
