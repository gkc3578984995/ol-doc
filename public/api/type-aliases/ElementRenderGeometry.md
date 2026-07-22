[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ElementRenderGeometry

# Type Alias: ElementRenderGeometry

> **ElementRenderGeometry** = \{ `coordinates`: [`Coordinate`](Coordinate.md); `type`: `"point"`; \} \| \{ `coordinates`: readonly [`Coordinate`](Coordinate.md)[]; `type`: `"polyline"`; \} \| \{ `coordinates`: readonly readonly [`Coordinate`](Coordinate.md)[][]; `type`: `"polygon"`; \} \| \{ `center`: [`Coordinate`](Coordinate.md); `radius`: `number`; `type`: `"circle"`; \}

Defined in: [src/facade/elementGeometryTypes.ts:7](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/elementGeometryTypes.ts#L7)

Element 最新已提交 Shape 状态解析出的完整静态渲染几何判别联合。

## Union Members

### Type Literal

\{ `coordinates`: [`Coordinate`](Coordinate.md); `type`: `"point"`; \}

#### coordinates

> `readonly` **coordinates**: [`Coordinate`](Coordinate.md)

点所在的位置。

#### type

> `readonly` **type**: `"point"`

点几何判别字段。

***

### Type Literal

\{ `coordinates`: readonly [`Coordinate`](Coordinate.md)[]; `type`: `"polyline"`; \}

#### coordinates

> `readonly` **coordinates**: readonly [`Coordinate`](Coordinate.md)[]

折线的完整有序顶点。

#### type

> `readonly` **type**: `"polyline"`

折线几何判别字段。

***

### Type Literal

\{ `coordinates`: readonly readonly [`Coordinate`](Coordinate.md)[][]; `type`: `"polygon"`; \}

#### coordinates

> `readonly` **coordinates**: readonly readonly [`Coordinate`](Coordinate.md)[][]

多边形的全部坐标环。

#### type

> `readonly` **type**: `"polygon"`

多边形几何判别字段。

***

### Type Literal

\{ `center`: [`Coordinate`](Coordinate.md); `radius`: `number`; `type`: `"circle"`; \}

#### center

> `readonly` **center**: [`Coordinate`](Coordinate.md)

圆在当前 View 投影中的中心。

#### radius

> `readonly` **radius**: `number`

圆在当前 View 投影单位中的渲染半径。

#### type

> `readonly` **type**: `"circle"`

圆几何判别字段。
