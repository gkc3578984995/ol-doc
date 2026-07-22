[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / InlinePathTextSpec

# Interface: InlinePathTextSpec

Defined in: [src/core/style/types.ts:291](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L291)

路径内嵌文本的完整、可序列化外观与放置策略。

## Properties

### backgroundFill?

> `optional` **backgroundFill?**: [`SolidFillSpec`](SolidFillSpec.md)

Defined in: [src/core/style/types.ts:309](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L309)

文本背景的纯色填充。

***

### backgroundPadding?

> `optional` **backgroundPadding?**: `number`

Defined in: [src/core/style/types.ts:311](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L311)

文本背景四周的 CSS 像素内边距。

***

### fill

> **fill**: [`SolidFillSpec`](SolidFillSpec.md)

Defined in: [src/core/style/types.ts:305](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L305)

文本内部的纯色填充。

***

### fontFamily

> **fontFamily**: `string`

Defined in: [src/core/style/types.ts:297](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L297)

文本字体族。

***

### fontSize

> **fontSize**: `number`

Defined in: [src/core/style/types.ts:299](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L299)

文本字号，单位为 CSS 像素。

***

### fontStyle

> **fontStyle**: `"normal"` \| `"italic"`

Defined in: [src/core/style/types.ts:303](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L303)

文本字体样式。

***

### fontWeight

> **fontWeight**: `number` \| `"bold"` \| `"normal"`

Defined in: [src/core/style/types.ts:301](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L301)

文本字重。

***

### gapPadding

> **gapPadding**: `number`

Defined in: [src/core/style/types.ts:313](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L313)

文本视觉外观两侧切断轨道的额外 CSS 像素间距。

***

### placement?

> `optional` **placement?**: [`InlinePathTextPlacementSpec`](../type-aliases/InlinePathTextPlacementSpec.md)

Defined in: [src/core/style/types.ts:295](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L295)

省略时仅在完整渲染路径的累计长度中点放置一次。

***

### stroke?

> `optional` **stroke?**: [`PathGlyphStrokeSpec`](PathGlyphStrokeSpec.md)

Defined in: [src/core/style/types.ts:307](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L307)

文本轮廓使用的不可虚线描边。

***

### text

> **text**: `string`

Defined in: [src/core/style/types.ts:293](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L293)

显示在路径上的非空文本。
