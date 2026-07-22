[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ElementSelector

# Interface: ElementSelector\<T\>

Defined in: [src/core/element/types.ts:40](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L40)

通过一个或多个条件筛选 Element。

`id` 和 `ids` 不能同时设置。更新、删除、显隐等批量写操作必须至少提供一个条件；要清空全部 Element 请使用 `clear()`。

## Type Parameters

### T

`T` = `unknown`

Element 携带的业务数据类型。

## Properties

### id?

> `optional` **id?**: `string`

Defined in: [src/core/element/types.ts:42](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L42)

匹配单个 Element ID。

***

### ids?

> `optional` **ids?**: readonly `string`[]

Defined in: [src/core/element/types.ts:44](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L44)

匹配一组 Element ID。

***

### layerId?

> `optional` **layerId?**: `string`

Defined in: [src/core/element/types.ts:48](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L48)

匹配渲染图层。

***

### module?

> `optional` **module?**: `string`

Defined in: [src/core/element/types.ts:46](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L46)

匹配业务模块。

***

### predicate?

> `optional` **predicate?**: (`state`) => `boolean`

Defined in: [src/core/element/types.ts:54](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L54)

补充自定义筛选；返回 `true` 时保留当前 Element。

#### Parameters

##### state

`Readonly`\<[`ElementState`](ElementState.md)\<`T`\>\>

#### Returns

`boolean`

***

### type?

> `optional` **type?**: `"triangle"` \| `"circle"` \| `"ellipse"` \| `"polygon"` \| `"polyline"` \| `"point"` \| `"attack-arrow"` \| `"tailed-attack-arrow"` \| `"fine-arrow"` \| `"tailed-squad-combat-arrow"` \| `"assault-direction-arrow"` \| `"double-arrow"` \| `"rectangle"` \| `"equilateral-triangle"` \| `"assemble-polygon"` \| `"closed-curve-polygon"` \| `"sector"` \| `"lune-polygon"` \| `"lune-polyline"` \| `"curve-polyline"`

Defined in: [src/core/element/types.ts:50](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L50)

匹配图形类型。

***

### visible?

> `optional` **visible?**: `boolean`

Defined in: [src/core/element/types.ts:52](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L52)

匹配业务可见状态。
