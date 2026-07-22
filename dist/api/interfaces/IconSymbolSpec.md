[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / IconSymbolSpec

# Interface: IconSymbolSpec

Defined in: [src/core/style/types.ts:74](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L74)

以图片渲染 Point 的符号样式。

## Properties

### anchor?

> `optional` **anchor?**: \[`number`, `number`\]

Defined in: [src/core/style/types.ts:94](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L94)

图片定位锚点。

***

### anchorOrigin?

> `optional` **anchorOrigin?**: `"bottom-left"` \| `"bottom-right"` \| `"top-left"` \| `"top-right"`

Defined in: [src/core/style/types.ts:96](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L96)

指定锚点从图片哪个角开始计算。

***

### anchorXUnits?

> `optional` **anchorXUnits?**: `"fraction"` \| `"pixels"`

Defined in: [src/core/style/types.ts:98](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L98)

横向锚点使用比例或像素单位。

***

### anchorYUnits?

> `optional` **anchorYUnits?**: `"fraction"` \| `"pixels"`

Defined in: [src/core/style/types.ts:100](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L100)

纵向锚点使用比例或像素单位。

***

### color?

> `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/core/style/types.ts:82](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L82)

图片叠加色。

***

### crossOrigin?

> `optional` **crossOrigin?**: `string` \| `null`

Defined in: [src/core/style/types.ts:106](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L106)

设置图片请求使用的 `crossOrigin`。

***

### displacement?

> `optional` **displacement?**: \[`number`, `number`\]

Defined in: [src/core/style/types.ts:86](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L86)

按 `[向右, 向上]` 设置图片相对锚点的像素距离。

***

### offset?

> `optional` **offset?**: \[`number`, `number`\]

Defined in: [src/core/style/types.ts:84](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L84)

图片在雪碧图中的起始位置。

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [src/core/style/types.ts:104](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L104)

取值范围为 `0` 到 `1`。

***

### origin?

> `optional` **origin?**: `"bottom-left"` \| `"bottom-right"` \| `"top-left"` \| `"top-right"`

Defined in: [src/core/style/types.ts:102](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L102)

指定裁剪偏移从图片哪个角开始计算。

***

### rotateWithView?

> `optional` **rotateWithView?**: `boolean`

Defined in: [src/core/style/types.ts:92](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L92)

控制图片是否随地图一起旋转。

***

### rotation?

> `optional` **rotation?**: `number`

Defined in: [src/core/style/types.ts:90](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L90)

图片顺时针旋转的角度，单位为度。

***

### scale?

> `optional` **scale?**: `number` \| \[`number`, `number`\]

Defined in: [src/core/style/types.ts:88](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L88)

可以统一缩放，也可以分别缩放宽高。

***

### size?

> `optional` **size?**: \[`number`, `number`\]

Defined in: [src/core/style/types.ts:80](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L80)

按 `[宽度, 高度]` 设置源图片大小。

***

### src

> **src**: `string`

Defined in: [src/core/style/types.ts:78](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L78)

图片 URL 或 Data URL。

***

### type

> **type**: `"icon"`

Defined in: [src/core/style/types.ts:76](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L76)

固定为图片符号。
