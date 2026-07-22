[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / PathTravelAnimationSpec

# Interface: PathTravelAnimationSpec

Defined in: [src/core/animation/types.ts:43](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L43)

带尾迹的路径移动动画。

## Properties

### channel?

> `readonly` `optional` **channel?**: `string`

Defined in: [src/core/animation/types.ts:47](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L47)

独立控制这组动画的通道。

***

### color?

> `readonly` `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/animation/types.ts:57](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L57)

移动轨迹使用的颜色。

***

### curvature?

> `readonly` `optional` **curvature?**: `number`

Defined in: [src/core/animation/types.ts:63](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L63)

`0` 使用原路径；两点路径使用二次 Bézier，多点路径使用 centripetal knot 与 waypoint 共享切线，正负值控制入弯或出弯侧重。

***

### durationMs?

> `readonly` `optional` **durationMs?**: `number`

Defined in: [src/core/animation/types.ts:51](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L51)

完整移动一次的时长，单位为毫秒；不能和速度同时设置。

***

### endLineColor?

> `readonly` `optional` **endLineColor?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/animation/types.ts:71](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L71)

终点辅助线使用的颜色。

***

### finishBehavior?

> `readonly` `optional` **finishBehavior?**: `"remove"` \| `"retain"`

Defined in: [src/core/animation/types.ts:73](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L73)

选择移除动画效果或保留最后一帧。

***

### gradient?

> `readonly` `optional` **gradient?**: readonly readonly \[`number`, [`Color`](../type-aliases/Color.md)\][]

Defined in: [src/core/animation/types.ts:59](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L59)

按位置和颜色设置移动轨迹的渐变；支持 named、hex、传统逗号及现代数值 rgb/hsl 语法、`transparent` 和数值 RGB/RGBA。

***

### repeat?

> `readonly` `optional` **repeat?**: `boolean`

Defined in: [src/core/animation/types.ts:53](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L53)

到达终点后是否重新开始。

***

### showEnd?

> `readonly` `optional` **showEnd?**: `boolean`

Defined in: [src/core/animation/types.ts:69](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L69)

控制路径终点标记是否可见。

***

### showStart?

> `readonly` `optional` **showStart?**: `boolean`

Defined in: [src/core/animation/types.ts:67](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L67)

控制路径起点标记是否可见。

***

### smoothness?

> `readonly` `optional` **smoothness?**: `number`

Defined in: [src/core/animation/types.ts:65](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L65)

设置整条曲线路径的采样预算；多点路径为避免曲率失效，每个非退化原始分段至少使用两个采样段。

***

### speed?

> `readonly` `optional` **speed?**: `number`

Defined in: [src/core/animation/types.ts:49](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L49)

每秒移动的地图距离，不能和时长同时设置。

***

### trailLength?

> `readonly` `optional` **trailLength?**: `number`

Defined in: [src/core/animation/types.ts:55](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L55)

占整条路径的比例，取值大于 `0` 且不超过 `1`。

***

### type

> `readonly` **type**: `"path-travel"`

Defined in: [src/core/animation/types.ts:45](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L45)

固定为路径运动动画。

***

### width?

> `readonly` `optional` **width?**: `number`

Defined in: [src/core/animation/types.ts:61](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L61)

移动轨迹的像素宽度。
