[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / RadarScanAnimationSpec

# Interface: RadarScanAnimationSpec

Defined in: [src/core/animation/types.ts:147](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L147)

在圆形或扇面内绘制旋转雷达尾迹。

## Properties

### beamWidthDeg?

> `readonly` `optional` **beamWidthDeg?**: `number`

Defined in: [src/core/animation/types.ts:165](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L165)

雷达尾迹角宽，单位为度。

***

### channel?

> `readonly` `optional` **channel?**: `string`

Defined in: [src/core/animation/types.ts:151](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L151)

独立控制这组动画的通道。

***

### color?

> `readonly` `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/animation/types.ts:159](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L159)

雷达尾迹使用的纯色；全部可见尾迹槽保持同一透明度，不能和 `gradient` 同时设置。

***

### direction?

> `readonly` `optional` **direction?**: `"clockwise"` \| `"counterclockwise"`

Defined in: [src/core/animation/types.ts:155](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L155)

最终屏幕上的首程扫描方向。

***

### gradient?

> `readonly` `optional` **gradient?**: readonly readonly \[`number`, [`Color`](../type-aliases/Color.md)\][]

Defined in: [src/core/animation/types.ts:161](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L161)

从尾迹最旧端 `0` 到扫描前沿 `1` 的颜色渐变；同时保留尾迹年龄透明度衰减，不能和 `color` 同时设置。

***

### opacity?

> `readonly` `optional` **opacity?**: `number`

Defined in: [src/core/animation/types.ts:163](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L163)

雷达尾迹相对颜色 alpha 的透明度乘数；纯色模式对全部可见槽恒定应用。

***

### periodMs?

> `readonly` `optional` **periodMs?**: `number`

Defined in: [src/core/animation/types.ts:153](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L153)

完整扫描模式周期，单位为毫秒；往返模式在半周期折返并于周期末回到起点。

***

### repeat?

> `readonly` `optional` **repeat?**: `boolean`

Defined in: [src/core/animation/types.ts:167](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L167)

完成一个所选扫描模式的完整周期后是否重新开始。

***

### scanMode?

> `readonly` `optional` **scanMode?**: `"one-way"` \| `"round-trip"`

Defined in: [src/core/animation/types.ts:157](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L157)

单向扫描，或按 `direction` 完成首程后原路返回。

***

### type

> `readonly` **type**: `"radar-scan"`

Defined in: [src/core/animation/types.ts:149](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L149)

固定为雷达扫描动画。
