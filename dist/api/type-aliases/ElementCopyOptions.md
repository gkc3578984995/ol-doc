[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ElementCopyOptions

# Type Alias: ElementCopyOptions\<T\>

> **ElementCopyOptions**\<`T`\> = `Partial`\<`Omit`\<[`ElementState`](../interfaces/ElementState.md)\<`T`\>, `"id"` \| `"type"` \| `"geometry"`\> & `object`\>

Defined in: [src/core/element/types.ts:73](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/element/types.ts#L73)

Element 复制参数，可覆盖新副本的几何、样式和业务信息。

## Type Parameters

### T

`T` = `unknown`

Element 携带的业务数据类型。
