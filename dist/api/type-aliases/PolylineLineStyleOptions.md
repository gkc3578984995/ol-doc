[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / PolylineLineStyleOptions

# Type Alias: PolylineLineStyleOptions

> **PolylineLineStyleOptions** = \{ `caps?`: [`LineCapsOptions`](../interfaces/LineCapsOptions.md); `color?`: [`Color`](Color.md); `lines?`: [`LinePattern`](LinePattern.md); \} \| \{ `caps?`: `never`; `color?`: [`Color`](Color.md); `lines`: readonly \[[`LinePattern`](LinePattern.md), [`LinePattern`](LinePattern.md)\]; \} & `TrackedDecorationOptions` \| \{ `caps?`: `never`; `color?`: [`Color`](Color.md); `decoration`: [`DecorationOnlyLineType`](DecorationOnlyLineType.md); `lines`: `"none"`; `repeatSpacingPx?`: `never`; `text?`: `never`; `textStyle?`: `never`; \}

Defined in: [src/builtins/styles/lineStyles.ts:101](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L101)

`lineStyles.polyline()` 接受的严格判别参数。

## Union Members

\{ `caps?`: [`LineCapsOptions`](../interfaces/LineCapsOptions.md); `color?`: [`Color`](Color.md); `lines?`: [`LinePattern`](LinePattern.md); \} \| \{ `caps?`: `never`; `color?`: [`Color`](Color.md); `lines`: readonly \[[`LinePattern`](LinePattern.md), [`LinePattern`](LinePattern.md)\]; \} & `TrackedDecorationOptions`

***

### Type Literal

\{ `caps?`: `never`; `color?`: [`Color`](Color.md); `decoration`: [`DecorationOnlyLineType`](DecorationOnlyLineType.md); `lines`: `"none"`; `repeatSpacingPx?`: `never`; `text?`: `never`; `textStyle?`: `never`; \}

#### caps?

> `optional` **caps?**: `never`

纯装饰路径不允许端帽。

#### color?

> `optional` **color?**: [`Color`](Color.md)

纯装饰路径使用的颜色，默认红色。

#### decoration

> **decoration**: [`DecorationOnlyLineType`](DecorationOnlyLineType.md)

第一版纯装饰路径固定为斜杠。

#### lines

> **lines**: `"none"`

固定为不绘制轨道。

#### repeatSpacingPx?

> `optional` **repeatSpacingPx?**: `never`

纯装饰路径不允许配置文本或中心 glyph 重复间距。

#### text?

> `optional` **text?**: `never`

纯装饰路径不能传入文本。

#### textStyle?

> `optional` **textStyle?**: `never`

纯装饰路径不能传入文本样式。
