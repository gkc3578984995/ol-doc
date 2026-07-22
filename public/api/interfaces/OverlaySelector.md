[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / OverlaySelector

# Interface: OverlaySelector\<T\>

Defined in: [src/facade/overlayTypes.ts:79](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L79)

Overlay 的查询条件。`id` 和 `ids` 不能同时设置；`remove()` 至少需要一个条件，要清空全部内容请使用 `clear()`。

## Type Parameters

### T

`T` = `unknown`

Overlay 携带的业务数据类型。

## Properties

### id?

> `readonly` `optional` **id?**: `string`

Defined in: [src/facade/overlayTypes.ts:81](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L81)

只匹配该 ID 的 Overlay。

***

### ids?

> `readonly` `optional` **ids?**: readonly `string`[]

Defined in: [src/facade/overlayTypes.ts:83](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L83)

匹配列表中任一 ID 的 Overlay。

***

### module?

> `readonly` `optional` **module?**: `string`

Defined in: [src/facade/overlayTypes.ts:85](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L85)

只匹配该业务模块的 Overlay。

***

### predicate?

> `readonly` `optional` **predicate?**: (`data`, `handle`) => `boolean`

Defined in: [src/facade/overlayTypes.ts:89](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L89)

根据只读业务数据和 Overlay 句柄进行额外筛选。

#### Parameters

##### data

`Readonly`\<`T`\> \| `undefined`

##### handle

[`OverlayHandle`](OverlayHandle.md)\<`T`\>

#### Returns

`boolean`

***

### visible?

> `readonly` `optional` **visible?**: `boolean`

Defined in: [src/facade/overlayTypes.ts:87](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L87)

只匹配当前可见或隐藏的 Overlay。
