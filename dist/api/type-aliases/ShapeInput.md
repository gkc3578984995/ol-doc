[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ShapeInput

# Type Alias: ShapeInput\<T\>

> **ShapeInput**\<`T`\> = `T` *extends* `"circle"` ? `object` : `object`

Defined in: [src/core/shape/types.ts:37](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/shape/types.ts#L37)

图形输入。写入 Element 时可使用扁平坐标或嵌套坐标。

扁平的 `controlPoints` 始终按二维坐标依次分组。三维坐标请使用嵌套数组。

## Type Parameters

### T

`T` *extends* [`ShapeType`](ShapeType.md) = [`ShapeType`](ShapeType.md)

要写入的图形类型。
