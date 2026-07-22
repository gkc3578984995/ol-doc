[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / PolygonLineStyleOptions

# Type Alias: PolygonLineStyleOptions

> **PolygonLineStyleOptions** = `object` & `TrackedDecorationOptions` \| \{ `caps?`: `never`; `color?`: [`Color`](Color.md); `decoration`: [`DecorationOnlyLineType`](DecorationOnlyLineType.md); `lines`: `"none"`; `repeatSpacingPx?`: `never`; `text?`: `never`; `textStyle?`: `never`; \}

Defined in: [src/builtins/styles/lineStyles.ts:139](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L139)

`lineStyles.polygon()` 接受的严格判别参数。

## Union Members

`object` & `TrackedDecorationOptions`

***

### Type Literal

\{ `caps?`: `never`; `color?`: [`Color`](Color.md); `decoration`: [`DecorationOnlyLineType`](DecorationOnlyLineType.md); `lines`: `"none"`; `repeatSpacingPx?`: `never`; `text?`: `never`; `textStyle?`: `never`; \}

#### caps?

> `optional` **caps?**: `never`

Polygon 闭合边界不允许端帽。

#### color?

> `optional` **color?**: [`Color`](Color.md)

纯装饰边界使用的颜色，默认红色。

#### decoration

> **decoration**: [`DecorationOnlyLineType`](DecorationOnlyLineType.md)

第一版纯装饰边界固定为斜杠。

#### lines

> **lines**: `"none"`

固定为不绘制边界轨道。

#### repeatSpacingPx?

> `optional` **repeatSpacingPx?**: `never`

纯装饰边界不允许配置文本或中心 glyph 重复间距。

#### text?

> `optional` **text?**: `never`

纯装饰边界不能传入文本。

#### textStyle?

> `optional` **textStyle?**: `never`

纯装饰边界不能传入文本样式。
