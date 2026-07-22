[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / TileUrlFunction

# Type Alias: TileUrlFunction

> **TileUrlFunction** = (`coordinate`) => `string`

Defined in: [src/facade/types.ts:23](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L23)

根据瓦片坐标生成请求地址。

## Parameters

### coordinate

\[`number`, `number`, `number`\]

依次为缩放级别、横向索引和纵向索引的瓦片坐标。

## Returns

`string`

瓦片地址。

## Example

```ts
const tileUrl: TileUrlFunction = ([z, x, y]) => `/tiles/${z}/${x}/${y}.png`;
```
