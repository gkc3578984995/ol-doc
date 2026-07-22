[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / PathGlyphPrimitiveSpec

# Type Alias: PathGlyphPrimitiveSpec

> **PathGlyphPrimitiveSpec** = \{ `from`: \[`number`, `number`\]; `stroke`: [`PathGlyphStrokeSpec`](../interfaces/PathGlyphStrokeSpec.md); `to`: \[`number`, `number`\]; `type`: `"segment"`; \} \| \{ `center`: \[`number`, `number`\]; `fill?`: [`SolidFillSpec`](../interfaces/SolidFillSpec.md); `radius`: `number`; `stroke?`: [`PathGlyphStrokeSpec`](../interfaces/PathGlyphStrokeSpec.md); `type`: `"circle"`; \} \| \{ `fill?`: [`SolidFillSpec`](../interfaces/SolidFillSpec.md); `points`: \[`number`, `number`\][]; `stroke?`: [`PathGlyphStrokeSpec`](../interfaces/PathGlyphStrokeSpec.md); `type`: `"polygon"`; \} \| \{ `primitives`: `PathGlyphPrimitiveSpec`[]; `type`: `"group"`; \}

Defined in: [src/core/style/types.ts:190](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L190)

路径 glyph 使用的局部 CSS 像素矢量原语。

## Union Members

### Type Literal

\{ `from`: \[`number`, `number`\]; `stroke`: [`PathGlyphStrokeSpec`](../interfaces/PathGlyphStrokeSpec.md); `to`: \[`number`, `number`\]; `type`: `"segment"`; \}

#### from

> **from**: \[`number`, `number`\]

线段在路径局部 `[u, v]` 坐标中的起点。

#### stroke

> **stroke**: [`PathGlyphStrokeSpec`](../interfaces/PathGlyphStrokeSpec.md)

线段使用的不可虚线描边。

#### to

> **to**: \[`number`, `number`\]

线段在路径局部 `[u, v]` 坐标中的终点。

#### type

> **type**: `"segment"`

固定为线段原语。

***

### Type Literal

\{ `center`: \[`number`, `number`\]; `fill?`: [`SolidFillSpec`](../interfaces/SolidFillSpec.md); `radius`: `number`; `stroke?`: [`PathGlyphStrokeSpec`](../interfaces/PathGlyphStrokeSpec.md); `type`: `"circle"`; \}

#### center

> **center**: \[`number`, `number`\]

圆心在路径局部 `[u, v]` 坐标中的位置。

#### fill?

> `optional` **fill?**: [`SolidFillSpec`](../interfaces/SolidFillSpec.md)

圆形内部的纯色填充。

#### radius

> **radius**: `number`

圆形半径，单位为 CSS 像素。

#### stroke?

> `optional` **stroke?**: [`PathGlyphStrokeSpec`](../interfaces/PathGlyphStrokeSpec.md)

圆形边缘使用的不可虚线描边。

#### type

> **type**: `"circle"`

固定为圆形原语。

***

### Type Literal

\{ `fill?`: [`SolidFillSpec`](../interfaces/SolidFillSpec.md); `points`: \[`number`, `number`\][]; `stroke?`: [`PathGlyphStrokeSpec`](../interfaces/PathGlyphStrokeSpec.md); `type`: `"polygon"`; \}

#### fill?

> `optional` **fill?**: [`SolidFillSpec`](../interfaces/SolidFillSpec.md)

多边形内部的纯色填充。

#### points

> **points**: \[`number`, `number`\][]

多边形顶点在路径局部 `[u, v]` 坐标中的位置。

#### stroke?

> `optional` **stroke?**: [`PathGlyphStrokeSpec`](../interfaces/PathGlyphStrokeSpec.md)

多边形边缘使用的不可虚线描边。

#### type

> **type**: `"polygon"`

固定为多边形原语。

***

### Type Literal

\{ `primitives`: `PathGlyphPrimitiveSpec`[]; `type`: `"group"`; \}

#### primitives

> **primitives**: `PathGlyphPrimitiveSpec`[]

按声明顺序组成一个 glyph 的子原语。

#### type

> **type**: `"group"`

固定为原语组合。
