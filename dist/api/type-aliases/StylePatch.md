[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / StylePatch

# Type Alias: StylePatch

> **StylePatch** = `object`

Defined in: [src/core/style/types.ts:385](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L385)

样式更新参数。数组会整体替换，对象会逐层合并，传入 `undefined` 可删除字段；传入 `type` 时会替换整个样式分支。

## Properties

### decorations?

> `optional` **decorations?**: [`ArrowDecorationSpec`](../interfaces/ArrowDecorationSpec.md)[]

Defined in: [src/core/style/types.ts:569](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L569)

整体替换或删除箭头等装饰。

***

### fill?

> `optional` **fill?**: [`SolidFillSpec`](../interfaces/SolidFillSpec.md) \| [`PatternFillSpec`](../interfaces/PatternFillSpec.md) \| \{ `backgroundColor?`: `never`; `color?`: [`SolidFillSpec`](../interfaces/SolidFillSpec.md)\[`"color"`\]; `dotRadius?`: `never`; `lineWidth?`: `never`; `pattern?`: `never`; `size?`: `never`; `type?`: `never`; \} \| \{ `backgroundColor?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"backgroundColor"`\]; `color?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"color"`\]; `dotRadius?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"dotRadius"`\]; `lineWidth?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"lineWidth"`\]; `pattern?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"pattern"`\]; `size?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"size"`\]; `type?`: `never`; \}

Defined in: [src/core/style/types.ts:447](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L447)

更新、替换或删除颜色和纹理填充。

#### Union Members

[`SolidFillSpec`](../interfaces/SolidFillSpec.md)

***

[`PatternFillSpec`](../interfaces/PatternFillSpec.md)

***

##### Type Literal

\{ `backgroundColor?`: `never`; `color?`: [`SolidFillSpec`](../interfaces/SolidFillSpec.md)\[`"color"`\]; `dotRadius?`: `never`; `lineWidth?`: `never`; `pattern?`: `never`; `size?`: `never`; `type?`: `never`; \}

##### backgroundColor?

> `optional` **backgroundColor?**: `never`

纯色填充不能设置这个字段。

##### color?

> `optional` **color?**: [`SolidFillSpec`](../interfaces/SolidFillSpec.md)\[`"color"`\]

更新纯色填充的颜色。

##### dotRadius?

> `optional` **dotRadius?**: `never`

纯色填充不能设置这个字段。

##### lineWidth?

> `optional` **lineWidth?**: `never`

纯色填充不能设置这个字段。

##### pattern?

> `optional` **pattern?**: `never`

纯色填充不能设置这个字段。

##### size?

> `optional` **size?**: `never`

纯色填充不能设置这个字段。

##### type?

> `optional` **type?**: `never`

局部更新纯色填充时不要传入。

***

##### Type Literal

\{ `backgroundColor?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"backgroundColor"`\]; `color?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"color"`\]; `dotRadius?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"dotRadius"`\]; `lineWidth?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"lineWidth"`\]; `pattern?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"pattern"`\]; `size?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"size"`\]; `type?`: `never`; \}

##### backgroundColor?

> `optional` **backgroundColor?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"backgroundColor"`\]

更新或删除纹理背景色。

##### color?

> `optional` **color?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"color"`\]

更新纹理线条或圆点的颜色。

##### dotRadius?

> `optional` **dotRadius?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"dotRadius"`\]

更新圆点纹理的像素半径。

##### lineWidth?

> `optional` **lineWidth?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"lineWidth"`\]

更新纹理线条的像素宽度。

##### pattern?

> `optional` **pattern?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"pattern"`\]

更新填充使用的内置图案。

##### size?

> `optional` **size?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"size"`\]

更新纹理单元的像素大小。

##### type?

> `optional` **type?**: `never`

局部更新纹理填充时不要传入。

***

### linework?

> `optional` **linework?**: [`LineworkSpec`](../interfaces/LineworkSpec.md)

Defined in: [src/core/style/types.ts:571](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L571)

整体替换或删除路径线饰，不执行深层局部合并。

***

### strokes?

> `optional` **strokes?**: [`StrokeSpec`](../interfaces/StrokeSpec.md)[]

Defined in: [src/core/style/types.ts:445](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L445)

整体替换或删除多层描边。

***

### symbol?

> `optional` **symbol?**: [`CircleSymbolSpec`](../interfaces/CircleSymbolSpec.md) \| [`IconSymbolSpec`](../interfaces/IconSymbolSpec.md) \| `object` & `{ [K in Exclude<keyof IconSymbolSpec, "type">]?: never }` \| `object` & \{ \[K in Exclude\<keyof IconSymbolSpec, "type" \| "src"\>\]?: IconSymbolSpec\[K\] \} & `{ [K in Exclude<keyof CircleSymbolSpec, "type">]?: never }`

Defined in: [src/core/style/types.ts:387](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L387)

更新、替换或删除圆形和图片符号。

***

### text?

> `optional` **text?**: `Omit`\<`{ [K in keyof TextSpec]?: TextSpec[K] }`, `"text"` \| `"fill"` \| `"stroke"` \| `"backgroundFill"` \| `"backgroundStroke"`\> & `object`

Defined in: [src/core/style/types.ts:484](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L484)

逐项更新或删除文字样式。

#### Type Declaration

##### backgroundFill?

> `optional` **backgroundFill?**: [`SolidFillSpec`](../interfaces/SolidFillSpec.md) \| [`PatternFillSpec`](../interfaces/PatternFillSpec.md) \| \{ `backgroundColor?`: `never`; `color?`: [`SolidFillSpec`](../interfaces/SolidFillSpec.md)\[`"color"`\]; `dotRadius?`: `never`; `lineWidth?`: `never`; `pattern?`: `never`; `size?`: `never`; `type?`: `never`; \} \| \{ `backgroundColor?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"backgroundColor"`\]; `color?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"color"`\]; `dotRadius?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"dotRadius"`\]; `lineWidth?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"lineWidth"`\]; `pattern?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"pattern"`\]; `size?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"size"`\]; `type?`: `never`; \}

更新、替换或删除文字背景样式。

###### Union Members

[`SolidFillSpec`](../interfaces/SolidFillSpec.md)

***

[`PatternFillSpec`](../interfaces/PatternFillSpec.md)

***

###### Type Literal

\{ `backgroundColor?`: `never`; `color?`: [`SolidFillSpec`](../interfaces/SolidFillSpec.md)\[`"color"`\]; `dotRadius?`: `never`; `lineWidth?`: `never`; `pattern?`: `never`; `size?`: `never`; `type?`: `never`; \}

###### backgroundColor?

> `optional` **backgroundColor?**: `never`

纯色填充不能设置这个字段。

###### color?

> `optional` **color?**: [`SolidFillSpec`](../interfaces/SolidFillSpec.md)\[`"color"`\]

更新纯色填充的颜色。

###### dotRadius?

> `optional` **dotRadius?**: `never`

纯色填充不能设置这个字段。

###### lineWidth?

> `optional` **lineWidth?**: `never`

纯色填充不能设置这个字段。

###### pattern?

> `optional` **pattern?**: `never`

纯色填充不能设置这个字段。

###### size?

> `optional` **size?**: `never`

纯色填充不能设置这个字段。

###### type?

> `optional` **type?**: `never`

局部更新纯色填充时不要传入。

***

###### Type Literal

\{ `backgroundColor?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"backgroundColor"`\]; `color?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"color"`\]; `dotRadius?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"dotRadius"`\]; `lineWidth?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"lineWidth"`\]; `pattern?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"pattern"`\]; `size?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"size"`\]; `type?`: `never`; \}

###### backgroundColor?

> `optional` **backgroundColor?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"backgroundColor"`\]

更新或删除纹理背景色。

###### color?

> `optional` **color?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"color"`\]

更新纹理线条或圆点的颜色。

###### dotRadius?

> `optional` **dotRadius?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"dotRadius"`\]

更新圆点纹理的像素半径。

###### lineWidth?

> `optional` **lineWidth?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"lineWidth"`\]

更新纹理线条的像素宽度。

###### pattern?

> `optional` **pattern?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"pattern"`\]

更新填充使用的内置图案。

###### size?

> `optional` **size?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"size"`\]

更新纹理单元的像素大小。

###### type?

> `optional` **type?**: `never`

局部更新纹理填充时不要传入。

##### backgroundStroke?

> `optional` **backgroundStroke?**: `{ [K in keyof StrokeSpec]?: StrokeSpec[K] }`

逐项更新或删除文字背景边缘样式。

##### fill?

> `optional` **fill?**: [`SolidFillSpec`](../interfaces/SolidFillSpec.md) \| [`PatternFillSpec`](../interfaces/PatternFillSpec.md) \| \{ `backgroundColor?`: `never`; `color?`: [`SolidFillSpec`](../interfaces/SolidFillSpec.md)\[`"color"`\]; `dotRadius?`: `never`; `lineWidth?`: `never`; `pattern?`: `never`; `size?`: `never`; `type?`: `never`; \} \| \{ `backgroundColor?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"backgroundColor"`\]; `color?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"color"`\]; `dotRadius?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"dotRadius"`\]; `lineWidth?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"lineWidth"`\]; `pattern?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"pattern"`\]; `size?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"size"`\]; `type?`: `never`; \}

更新、替换或删除文字内部样式。

###### Union Members

[`SolidFillSpec`](../interfaces/SolidFillSpec.md)

***

[`PatternFillSpec`](../interfaces/PatternFillSpec.md)

***

###### Type Literal

\{ `backgroundColor?`: `never`; `color?`: [`SolidFillSpec`](../interfaces/SolidFillSpec.md)\[`"color"`\]; `dotRadius?`: `never`; `lineWidth?`: `never`; `pattern?`: `never`; `size?`: `never`; `type?`: `never`; \}

###### backgroundColor?

> `optional` **backgroundColor?**: `never`

纯色填充不能设置这个字段。

###### color?

> `optional` **color?**: [`SolidFillSpec`](../interfaces/SolidFillSpec.md)\[`"color"`\]

更新纯色填充的颜色。

###### dotRadius?

> `optional` **dotRadius?**: `never`

纯色填充不能设置这个字段。

###### lineWidth?

> `optional` **lineWidth?**: `never`

纯色填充不能设置这个字段。

###### pattern?

> `optional` **pattern?**: `never`

纯色填充不能设置这个字段。

###### size?

> `optional` **size?**: `never`

纯色填充不能设置这个字段。

###### type?

> `optional` **type?**: `never`

局部更新纯色填充时不要传入。

***

###### Type Literal

\{ `backgroundColor?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"backgroundColor"`\]; `color?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"color"`\]; `dotRadius?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"dotRadius"`\]; `lineWidth?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"lineWidth"`\]; `pattern?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"pattern"`\]; `size?`: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"size"`\]; `type?`: `never`; \}

###### backgroundColor?

> `optional` **backgroundColor?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"backgroundColor"`\]

更新或删除纹理背景色。

###### color?

> `optional` **color?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"color"`\]

更新纹理线条或圆点的颜色。

###### dotRadius?

> `optional` **dotRadius?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"dotRadius"`\]

更新圆点纹理的像素半径。

###### lineWidth?

> `optional` **lineWidth?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"lineWidth"`\]

更新纹理线条的像素宽度。

###### pattern?

> `optional` **pattern?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"pattern"`\]

更新填充使用的内置图案。

###### size?

> `optional` **size?**: [`PatternFillSpec`](../interfaces/PatternFillSpec.md)\[`"size"`\]

更新纹理单元的像素大小。

###### type?

> `optional` **type?**: `never`

局部更新纹理填充时不要传入。

##### stroke?

> `optional` **stroke?**: `{ [K in keyof StrokeSpec]?: StrokeSpec[K] }`

逐项更新或删除文字边缘样式。

##### text?

> `optional` **text?**: [`TextSpec`](../interfaces/TextSpec.md)\[`"text"`\]

更新要显示的文字内容。

***

### zIndex?

> `optional` **zIndex?**: `number`

Defined in: [src/core/style/types.ts:573](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L573)

更新或删除样式的绘制层级。
