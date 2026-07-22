[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / TextSpec

# Interface: TextSpec

Defined in: [src/core/style/types.ts:110](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L110)

Element 文本的内容与外观。

## Properties

### backgroundFill?

> `optional` **backgroundFill?**: [`SolidFillSpec`](SolidFillSpec.md) \| [`PatternFillSpec`](PatternFillSpec.md)

Defined in: [src/core/style/types.ts:128](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L128)

控制文字背景的颜色或纹理。

***

### backgroundStroke?

> `optional` **backgroundStroke?**: [`StrokeSpec`](StrokeSpec.md)

Defined in: [src/core/style/types.ts:130](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L130)

控制文字背景边缘的样式。

***

### fill?

> `optional` **fill?**: [`SolidFillSpec`](SolidFillSpec.md) \| [`PatternFillSpec`](PatternFillSpec.md)

Defined in: [src/core/style/types.ts:124](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L124)

控制文字内部的颜色或纹理。

***

### font?

> `optional` **font?**: `string`

Defined in: [src/core/style/types.ts:114](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L114)

未设置拆分字体字段时，直接使用完整的 CSS 字体值。

***

### fontFamily?

> `optional` **fontFamily?**: `string`

Defined in: [src/core/style/types.ts:116](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L116)

设置文字使用的字体族。

***

### fontSize?

> `optional` **fontSize?**: `string` \| `number`

Defined in: [src/core/style/types.ts:118](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L118)

设置文字大小，数字按像素处理。

***

### fontStyle?

> `optional` **fontStyle?**: `"normal"` \| `"italic"` \| `"oblique"`

Defined in: [src/core/style/types.ts:122](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L122)

设置正常、斜体或倾斜文字。

***

### fontWeight?

> `optional` **fontWeight?**: `number` \| `"bold"` \| `"normal"` \| `"lighter"` \| `"bolder"`

Defined in: [src/core/style/types.ts:120](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L120)

设置文字的粗细。

***

### justify?

> `optional` **justify?**: `"center"` \| `"left"` \| `"right"`

Defined in: [src/core/style/types.ts:156](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L156)

控制多行文字内部的对齐方向。

***

### keepUpright?

> `optional` **keepUpright?**: `boolean`

Defined in: [src/core/style/types.ts:158](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L158)

控制沿线文字是否自动避免倒置。

***

### maxAngle?

> `optional` **maxAngle?**: `number`

Defined in: [src/core/style/types.ts:152](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L152)

沿线文字允许的最大转角，单位为度。

***

### offsetX?

> `optional` **offsetX?**: `number`

Defined in: [src/core/style/types.ts:134](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L134)

正值让文字向右移动，单位为像素。

***

### offsetY?

> `optional` **offsetY?**: `number`

Defined in: [src/core/style/types.ts:136](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L136)

正值让文字向上移动，单位为像素。

***

### overflow?

> `optional` **overflow?**: `boolean`

Defined in: [src/core/style/types.ts:148](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L148)

控制文字超出几何范围时是否仍然显示。

***

### padding?

> `optional` **padding?**: `number`[]

Defined in: [src/core/style/types.ts:132](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L132)

按 `[上, 右, 下, 左]` 设置像素距离。

***

### placement?

> `optional` **placement?**: `"line"` \| `"point"`

Defined in: [src/core/style/types.ts:150](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L150)

可以放在点上，也可以沿线放置。

***

### repeat?

> `optional` **repeat?**: `number`

Defined in: [src/core/style/types.ts:154](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L154)

沿线重复文字之间的像素距离。

***

### rotateWithView?

> `optional` **rotateWithView?**: `boolean`

Defined in: [src/core/style/types.ts:146](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L146)

控制文字是否随地图一起旋转。

***

### rotation?

> `optional` **rotation?**: `number`

Defined in: [src/core/style/types.ts:144](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L144)

文字顺时针旋转的角度，单位为度。

***

### scale?

> `optional` **scale?**: `number` \| \[`number`, `number`\]

Defined in: [src/core/style/types.ts:138](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L138)

可以统一缩放，也可以分别缩放宽高。

***

### stroke?

> `optional` **stroke?**: [`StrokeSpec`](StrokeSpec.md)

Defined in: [src/core/style/types.ts:126](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L126)

控制文字边缘的样式。

***

### text

> **text**: `string`

Defined in: [src/core/style/types.ts:112](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L112)

要显示的文字内容。

***

### textAlign?

> `optional` **textAlign?**: `"center"` \| `"end"` \| `"start"` \| `"left"` \| `"right"`

Defined in: [src/core/style/types.ts:140](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L140)

控制文字相对定位点的水平位置。

***

### textBaseline?

> `optional` **textBaseline?**: `"top"` \| `"bottom"` \| `"alphabetic"` \| `"hanging"` \| `"ideographic"` \| `"middle"`

Defined in: [src/core/style/types.ts:142](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L142)

控制文字相对定位点的垂直位置。
