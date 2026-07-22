[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ElementPatch

# Type Alias: ElementPatch\<T\>

> **ElementPatch**\<`T`\> = `Partial`\<`Omit`\<[`ElementState`](../interfaces/ElementState.md)\<`T`\>, `"id"` \| `"type"` \| `"geometry"`\> & `object`\>

Defined in: [src/core/element/types.ts:62](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L62)

Element 更新参数，可修改除 ID 和图形类型外的状态。

## Type Parameters

### T

`T` = `unknown`

Element 携带的业务数据类型。
