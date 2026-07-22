[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / DashFlowAnimationSpec

# Interface: DashFlowAnimationSpec

Defined in: [src/core/animation/types.ts:29](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L29)

让普通折线描边或 linework 开放、闭合轨道的虚线沿路径移动。

## Properties

### channel?

> `readonly` `optional` **channel?**: `string`

Defined in: [src/core/animation/types.ts:33](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L33)

独立控制这组动画的通道。

***

### color?

> `readonly` `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/animation/types.ts:39](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L39)

流动虚线使用的颜色。

***

### lineDash?

> `readonly` `optional` **lineDash?**: readonly `number`[]

Defined in: [src/core/animation/types.ts:37](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L37)

按像素设置实线和空白的长度。

***

### speed?

> `readonly` `optional` **speed?**: `number`

Defined in: [src/core/animation/types.ts:35](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L35)

虚线每秒移动的像素距离。

***

### type

> `readonly` **type**: `"dash-flow"`

Defined in: [src/core/animation/types.ts:31](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/animation/types.ts#L31)

固定为流动虚线动画。
