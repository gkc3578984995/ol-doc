[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / MeasureOptions

# Interface: MeasureOptions

Defined in: [src/facade/measureTypes.ts:13](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L13)

Measure Session 的启动配置。

## Properties

### formatter?

> `readonly` `optional` **formatter?**: (`value`, `unit`) => `string`

Defined in: [src/facade/measureTypes.ts:23](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L23)

将数值和单位格式化为展示文本。

#### Parameters

##### value

`number`

##### unit

`"m"` \| `"km"` \| `"m²"` \| `"km²"`

#### Returns

`string`

***

### layerId?

> `readonly` `optional` **layerId?**: `string`

Defined in: [src/facade/measureTypes.ts:17](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L17)

承载测量图形的矢量图层 ID。

***

### line?

> `readonly` `optional` **line?**: [`StrokeSpec`](StrokeSpec.md)

Defined in: [src/facade/measureTypes.ts:25](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L25)

测量路径和边界的描边样式。

***

### point?

> `readonly` `optional` **point?**: `false` \| [`CircleSymbolSpec`](CircleSymbolSpec.md)

Defined in: [src/facade/measureTypes.ts:27](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L27)

测量控制点样式；传入 `false` 时隐藏控制点。

***

### policy?

> `readonly` `optional` **policy?**: [`InteractionPolicy`](../type-aliases/InteractionPolicy.md)

Defined in: [src/facade/measureTypes.ts:33](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L33)

交互冲突策略：`replace` 替换旧交互，`reject` 拒绝新交互。

***

### precision?

> `readonly` `optional` **precision?**: `number`

Defined in: [src/facade/measureTypes.ts:21](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L21)

默认格式化结果保留的小数位数。

***

### showTotal?

> `readonly` `optional` **showTotal?**: `boolean`

Defined in: [src/facade/measureTypes.ts:31](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L31)

分段距离测量是否同时显示累计结果。

***

### text?

> `readonly` `optional` **text?**: `Omit`\<[`TextSpec`](TextSpec.md), `"repeat"` \| `"overflow"` \| `"text"` \| `"rotateWithView"` \| `"placement"` \| `"maxAngle"` \| `"keepUpright"`\>

Defined in: [src/facade/measureTypes.ts:29](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L29)

测量提示和结果标签的文本样式。

***

### type

> `readonly` **type**: `"area"` \| `"distance-segments"` \| `"distance-total"` \| `"distance-radial"`

Defined in: [src/facade/measureTypes.ts:15](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L15)

本次 Session 采用的测量方式。

***

### unit?

> `readonly` `optional` **unit?**: `"m"` \| `"km"` \| `"m²"` \| `"km²"`

Defined in: [src/facade/measureTypes.ts:19](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L19)

距离或面积结果的单位。
