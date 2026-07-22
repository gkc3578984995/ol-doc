[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ElementGeometryDetails

# Interface: ElementGeometryDetails

Defined in: [src/facade/elementGeometryTypes.ts:36](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/elementGeometryTypes.ts#L36)

Element 完整静态渲染几何、当前 View 投影范围及统一控制参数。

## Properties

### center

> `readonly` **center**: [`Coordinate`](../type-aliases/Coordinate.md) \| `null`

Defined in: [src/facade/elementGeometryTypes.ts:53](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/elementGeometryTypes.ts#L53)

Circle 在当前 View 投影中的圆心；其他 Shape 返回 `null`。

***

### controlPoints

> `readonly` **controlPoints**: readonly [`Coordinate`](../type-aliases/Coordinate.md)[] \| `null`

Defined in: [src/facade/elementGeometryTypes.ts:51](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/elementGeometryTypes.ts#L51)

最新已提交的规范控制点；Circle 不使用控制点，因此返回 `null`。

***

### extent

> `readonly` **extent**: [`MapExtent`](../type-aliases/MapExtent.md)

Defined in: [src/facade/elementGeometryTypes.ts:40](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/elementGeometryTypes.ts#L40)

裸渲染几何的二维外接矩形，不包含样式、动画、交互预览或 world-wrap 展示副本。

***

### extentPoints

> `readonly` **extentPoints**: readonly \[readonly \[`number`, `number`\], readonly \[`number`, `number`\], readonly \[`number`, `number`\], readonly \[`number`, `number`\]\]

Defined in: [src/facade/elementGeometryTypes.ts:42](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/elementGeometryTypes.ts#L42)

`extent` 的四个二维角点，顺序为左下、右下、右上、左上。

***

### radius

> `readonly` **radius**: `Readonly`\<\{ `meters`: `number`; `projected`: `number`; \}\> \| `null`

Defined in: [src/facade/elementGeometryTypes.ts:55](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/elementGeometryTypes.ts#L55)

Circle 的米制业务半径和当前 View 投影半径；其他 Shape 返回 `null`。

***

### rangePoints

> `readonly` **rangePoints**: readonly readonly [`Coordinate`](../type-aliases/Coordinate.md)[][]

Defined in: [src/facade/elementGeometryTypes.ts:49](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/elementGeometryTypes.ts#L49)

最终渲染坐标的统一分组；Point、Polyline、Polygon 分别返回点组、路径组和 rings，Circle 返回空数组。

***

### renderGeometry

> `readonly` **renderGeometry**: [`ElementRenderGeometry`](../type-aliases/ElementRenderGeometry.md)

Defined in: [src/facade/elementGeometryTypes.ts:38](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/elementGeometryTypes.ts#L38)

从最新已提交 Shape 状态派生的完整静态渲染几何；Circle 的 radius 使用 View 投影单位。
