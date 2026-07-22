[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / InlineLineTextStyleOptions

# Interface: InlineLineTextStyleOptions

Defined in: [src/builtins/styles/lineStyles.ts:73](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L73)

路径内嵌文本允许自定义的外观。

## Properties

### background?

> `optional` **background?**: `object`

Defined in: [src/builtins/styles/lineStyles.ts:92](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L92)

可选文本背景。

#### color

> **color**: [`Color`](../type-aliases/Color.md)

背景颜色。

#### paddingPx?

> `optional` **paddingPx?**: `number`

背景内边距，单位为 CSS 像素，默认 2。

***

### color?

> `optional` **color?**: [`Color`](../type-aliases/Color.md)

Defined in: [src/builtins/styles/lineStyles.ts:83](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L83)

文本颜色，默认黑色。

***

### fontFamily?

> `optional` **fontFamily?**: `string`

Defined in: [src/builtins/styles/lineStyles.ts:77](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L77)

字体族，默认 `sans-serif`。

***

### fontSize?

> `optional` **fontSize?**: `number`

Defined in: [src/builtins/styles/lineStyles.ts:75](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L75)

字号，单位为 CSS 像素，默认 12。

***

### fontStyle?

> `optional` **fontStyle?**: `"normal"` \| `"italic"`

Defined in: [src/builtins/styles/lineStyles.ts:81](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L81)

字体样式，默认 `normal`。

***

### fontWeight?

> `optional` **fontWeight?**: `number` \| `"bold"` \| `"normal"`

Defined in: [src/builtins/styles/lineStyles.ts:79](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L79)

字重，默认 `normal`。

***

### outline?

> `optional` **outline?**: `object`

Defined in: [src/builtins/styles/lineStyles.ts:85](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L85)

可选文本轮廓。

#### color?

> `optional` **color?**: [`Color`](../type-aliases/Color.md)

轮廓颜色，默认白色。

#### width?

> `optional` **width?**: `number`

轮廓宽度，单位为 CSS 像素，默认 2。
