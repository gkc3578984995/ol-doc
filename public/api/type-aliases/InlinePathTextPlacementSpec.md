[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / InlinePathTextPlacementSpec

# Type Alias: InlinePathTextPlacementSpec

> **InlinePathTextPlacementSpec** = \{ `kind`: `"center"`; \} \| \{ `kind`: `"repeat"`; `phase?`: `number`; `spacing`: `number`; \}

Defined in: [src/core/style/types.ts:276](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L276)

路径内嵌文本的单点或固定像素间距放置策略。

## Union Members

### Type Literal

\{ `kind`: `"center"`; \}

#### kind

> **kind**: `"center"`

固定放在完整渲染路径累计长度的中点。

***

### Type Literal

\{ `kind`: `"repeat"`; `phase?`: `number`; `spacing`: `number`; \}

#### kind

> **kind**: `"repeat"`

按固定 CSS 像素间距重复放置。

#### phase?

> `optional` **phase?**: `number`

第一个文本锚点相对默认相位的 CSS 像素偏移。

#### spacing

> **spacing**: `number`

相邻文本锚点的 CSS 像素间距。
