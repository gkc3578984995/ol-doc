[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / LineworkSpec

# Interface: LineworkSpec

Defined in: [src/core/style/types.ts:346](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L346)

可组合的轨道、端帽、装饰与路径文本线饰。

## Properties

### caps?

> `optional` **caps?**: `object`

Defined in: [src/core/style/types.ts:350](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L350)

开放单轨路径可以分别配置起点和终点端帽。

#### end?

> `optional` **end?**: [`PathCapSpec`](PathCapSpec.md)

终点端帽。

#### start?

> `optional` **start?**: [`PathCapSpec`](PathCapSpec.md)

起点端帽。

***

### contour?

> `optional` **contour?**: [`PathContourPolicySpec`](../type-aliases/PathContourPolicySpec.md)

Defined in: [src/core/style/types.ts:361](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L361)

省略时按开放路径解释；内置工厂始终显式写入。

***

### decorations?

> `optional` **decorations?**: [`PathDecorationSpec`](../type-aliases/PathDecorationSpec.md)[]

Defined in: [src/core/style/types.ts:357](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L357)

重复装饰或严格位于累计长度中点的固定装饰。

***

### inlineText?

> `optional` **inlineText?**: [`InlinePathTextSpec`](InlinePathTextSpec.md)

Defined in: [src/core/style/types.ts:359](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L359)

默认位于累计长度中点，也可按固定像素间距重复并切断全部轨道的文本占位。

***

### tracks

> **tracks**: [`PathTrackSpec`](PathTrackSpec.md)[]

Defined in: [src/core/style/types.ts:348](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L348)

零条或多条独立轨道；纯装饰路径使用空数组。
