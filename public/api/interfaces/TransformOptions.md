[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / TransformOptions

# Interface: TransformOptions

Defined in: [src/facade/transformTypes.ts:72](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L72)

Transform Session 的启动配置。

## Properties

### buffer?

> `optional` **buffer?**: `number`

Defined in: [src/facade/transformTypes.ts:96](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L96)

几何外包框周围的缓冲，单位为 CSS 像素。

***

### handleCenter?

> `optional` **handleCenter?**: [`Coordinate`](../type-aliases/Coordinate.md)

Defined in: [src/facade/transformTypes.ts:102](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L102)

覆盖默认计算结果的操作中心坐标。

***

### handleStyle?

> `optional` **handleStyle?**: [`StyleSpec`](StyleSpec.md)

Defined in: [src/facade/transformTypes.ts:100](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L100)

覆盖 Transform 控制手柄的结构化样式。

***

### historyLimit?

> `optional` **historyLimit?**: `number`

Defined in: [src/facade/transformTypes.ts:104](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L104)

Session 最多保留的撤销和重做快照数量。

***

### hitTolerance?

> `optional` **hitTolerance?**: `number`

Defined in: [src/facade/transformTypes.ts:80](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L80)

控制手柄和 Element 的命中容差，单位为 CSS 像素。

***

### keepRectangle?

> `optional` **keepRectangle?**: `boolean`

Defined in: [src/facade/transformTypes.ts:94](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L94)

矩形四角缩放时是否锁定宽高比，默认 false；拖动时按 Shift 可临时等比缩放。

***

### layerIds?

> `optional` **layerIds?**: readonly `string`[]

Defined in: [src/facade/transformTypes.ts:78](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L78)

Session 允许操作的图层 ID。

***

### noFlip?

> `optional` **noFlip?**: `boolean`

Defined in: [src/facade/transformTypes.ts:92](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L92)

是否禁止缩放和拉伸穿过零点后翻转。

***

### pointRadius?

> `optional` **pointRadius?**: `number`

Defined in: [src/facade/transformTypes.ts:98](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L98)

Point Element 控制区域的半径，单位为 CSS 像素。

***

### policy?

> `optional` **policy?**: [`InteractionPolicy`](../type-aliases/InteractionPolicy.md)

Defined in: [src/facade/transformTypes.ts:108](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L108)

交互冲突策略：`replace` 替换旧交互，`reject` 拒绝新交互。

***

### predicate?

> `optional` **predicate?**: (`element`) => `boolean`

Defined in: [src/facade/transformTypes.ts:76](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L76)

对公共 Element 句柄进行二次筛选。

#### Parameters

##### element

[`Element`](../classes/Element.md)

#### Returns

`boolean`

***

### rotate?

> `optional` **rotate?**: `boolean`

Defined in: [src/facade/transformTypes.ts:88](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L88)

是否显示旋转手柄并接受旋转操作。

***

### scale?

> `optional` **scale?**: `boolean`

Defined in: [src/facade/transformTypes.ts:84](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L84)

是否允许等比或双轴缩放。

***

### selector?

> `optional` **selector?**: [`ElementSelector`](ElementSelector.md)\<`unknown`\>

Defined in: [src/facade/transformTypes.ts:74](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L74)

限定 Session 可选 Element 的查询条件。

***

### stretch?

> `optional` **stretch?**: `boolean`

Defined in: [src/facade/transformTypes.ts:86](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L86)

是否允许沿单轴拉伸。

***

### toolbar?

> `optional` **toolbar?**: `boolean` \| [`TransformToolbarOptions`](TransformToolbarOptions.md)

Defined in: [src/facade/transformTypes.ts:106](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L106)

用布尔值启停默认工具栏，或传入自定义配置。

***

### translate?

> `optional` **translate?**: [`TransformTranslateMode`](../type-aliases/TransformTranslateMode.md)

Defined in: [src/facade/transformTypes.ts:82](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L82)

平移方式：禁用、中心手柄或直接拖动 Element。

***

### translateBBox?

> `optional` **translateBBox?**: `boolean`

Defined in: [src/facade/transformTypes.ts:90](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L90)

是否允许直接拖动控制区域平移。
