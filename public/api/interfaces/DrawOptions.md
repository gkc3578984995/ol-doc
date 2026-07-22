[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / DrawOptions

# Interface: DrawOptions\<T\>

Defined in: [src/facade/drawTypes.ts:13](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L13)

Draw Session 的启动配置。

## Type Parameters

### T

`T` = `unknown`

完成后的 Element 携带的业务数据类型。

## Properties

### data?

> `optional` **data?**: `T`

Defined in: [src/facade/drawTypes.ts:23](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L23)

写入每个完成结果的业务数据；启动 Session 时会保存独立副本。

***

### keepGraphics?

> `optional` **keepGraphics?**: `boolean`

Defined in: [src/facade/drawTypes.ts:27](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L27)

是否保留完成的 Element；设为 `false` 时只在同步 `complete` 回调期间提供临时句柄。

***

### layerId

> **layerId**: `string`

Defined in: [src/facade/drawTypes.ts:17](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L17)

承载预览和完成结果的矢量图层 ID。

***

### limit?

> `optional` **limit?**: `number`

Defined in: [src/facade/drawTypes.ts:25](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L25)

自动结束前的完成数量；省略或设为 `0` 时持续绘制。

***

### module?

> `optional` **module?**: `string`

Defined in: [src/facade/drawTypes.ts:19](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L19)

写入完成结果的业务模块标识。

***

### policy?

> `optional` **policy?**: [`InteractionPolicy`](../type-aliases/InteractionPolicy.md)

Defined in: [src/facade/drawTypes.ts:29](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L29)

交互冲突策略：`replace` 替换旧交互，`reject` 拒绝新交互。

***

### style?

> `optional` **style?**: [`StyleInput`](../type-aliases/StyleInput.md)

Defined in: [src/facade/drawTypes.ts:21](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L21)

结构化样式，或属于当前 Earth 的原生 OpenLayers 样式。

***

### type

> **type**: `"triangle"` \| `"circle"` \| `"ellipse"` \| `"polygon"` \| `"polyline"` \| `"point"` \| `"attack-arrow"` \| `"tailed-attack-arrow"` \| `"fine-arrow"` \| `"tailed-squad-combat-arrow"` \| `"assault-direction-arrow"` \| `"double-arrow"` \| `"rectangle"` \| `"equilateral-triangle"` \| `"assemble-polygon"` \| `"closed-curve-polygon"` \| `"sector"` \| `"lune-polygon"` \| `"lune-polyline"` \| `"curve-polyline"`

Defined in: [src/facade/drawTypes.ts:15](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L15)

已注册且支持绘制的图形类型。
