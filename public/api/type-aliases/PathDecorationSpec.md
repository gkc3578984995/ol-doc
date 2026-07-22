[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / PathDecorationSpec

# Type Alias: PathDecorationSpec

> **PathDecorationSpec** = \{ `cutoutPadding?`: `number`; `glyph?`: `never`; `placement`: \{ `kind`: `"repeat"`; `phase?`: `number`; `spacing`: `number`; \}; `sequence`: [`PathGlyphSpec`](../interfaces/PathGlyphSpec.md)[]; \} \| \{ `cutoutPadding?`: `number`; `glyph`: [`PathGlyphSpec`](../interfaces/PathGlyphSpec.md); `placement`: \{ `kind`: `"center"`; \}; `sequence?`: `never`; \}

Defined in: [src/core/style/types.ts:243](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L243)

沿路径重复或在路径中点放置的装饰。

## Union Members

### Type Literal

\{ `cutoutPadding?`: `number`; `glyph?`: `never`; `placement`: \{ `kind`: `"repeat"`; `phase?`: `number`; `spacing`: `number`; \}; `sequence`: [`PathGlyphSpec`](../interfaces/PathGlyphSpec.md)[]; \}

#### cutoutPadding?

> `optional` **cutoutPadding?**: `number`

每个重复 glyph 外侧额外切出的 CSS 像素留白。

#### glyph?

> `optional` **glyph?**: `never`

重复装饰不使用单个中点 glyph。

#### placement

> **placement**: `object`

按固定 CSS 像素间距重复放置。

##### placement.kind

> **kind**: `"repeat"`

固定为重复放置。

##### placement.phase?

> `optional` **phase?**: `number`

第一个装饰相对默认相位的 CSS 像素偏移。

##### placement.spacing

> **spacing**: `number`

相邻装饰锚点的 CSS 像素间距。

#### sequence

> **sequence**: [`PathGlyphSpec`](../interfaces/PathGlyphSpec.md)[]

按锚点次序循环选择的非空 glyph 序列。

***

### Type Literal

\{ `cutoutPadding?`: `number`; `glyph`: [`PathGlyphSpec`](../interfaces/PathGlyphSpec.md); `placement`: \{ `kind`: `"center"`; \}; `sequence?`: `never`; \}

#### cutoutPadding?

> `optional` **cutoutPadding?**: `number`

glyph 外侧额外切出的 CSS 像素留白。

#### glyph

> **glyph**: [`PathGlyphSpec`](../interfaces/PathGlyphSpec.md)

放在路径中点的单个 glyph。

#### placement

> **placement**: `object`

固定放在完整渲染路径累计长度的中点。

##### placement.kind

> **kind**: `"center"`

固定为中点放置。

#### sequence?

> `optional` **sequence?**: `never`

中点装饰不使用重复 glyph 序列。
