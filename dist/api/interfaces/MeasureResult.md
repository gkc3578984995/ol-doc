[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / MeasureResult

# Interface: MeasureResult

Defined in: [src/facade/measureTypes.ts:37](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L37)

一次测量计算的只读结果。

## Properties

### coordinates

> `readonly` **coordinates**: readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

Defined in: [src/facade/measureTypes.ts:49](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L49)

当前 Earth 投影下的测量坐标。

***

### formatted

> `readonly` **formatted**: `string`

Defined in: [src/facade/measureTypes.ts:45](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L45)

可直接展示的测量结果文本。

***

### geographicCoordinates

> `readonly` **geographicCoordinates**: readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

Defined in: [src/facade/measureTypes.ts:51](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L51)

换算为经纬度后的测量坐标。

***

### geometry

> `readonly` **geometry**: [`ShapeState`](../type-aliases/ShapeState.md)

Defined in: [src/facade/measureTypes.ts:47](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L47)

当前测量图形的语义几何快照。

***

### segments

> `readonly` **segments**: readonly `Readonly`\<\{ `end`: [`Coordinate`](../type-aliases/Coordinate.md); `endGeographic`: [`Coordinate`](../type-aliases/Coordinate.md); `formatted`: `string`; `start`: [`Coordinate`](../type-aliases/Coordinate.md); `startGeographic`: [`Coordinate`](../type-aliases/Coordinate.md); `unit`: `"m"` \| `"km"`; `value`: `number`; \}\>[]

Defined in: [src/facade/measureTypes.ts:53](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L53)

距离测量的逐段明细；面积测量中为空。

***

### type

> `readonly` **type**: `"area"` \| `"distance-segments"` \| `"distance-total"` \| `"distance-radial"`

Defined in: [src/facade/measureTypes.ts:39](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L39)

产生本结果的测量方式。

***

### unit

> `readonly` **unit**: `"m"` \| `"km"` \| `"m²"` \| `"km²"`

Defined in: [src/facade/measureTypes.ts:43](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L43)

`value` 和 `formatted` 使用的单位。

***

### value

> `readonly` **value**: `number`

Defined in: [src/facade/measureTypes.ts:41](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L41)

按 `unit` 表示的原始数值。
