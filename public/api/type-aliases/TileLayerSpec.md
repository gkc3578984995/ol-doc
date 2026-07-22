[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / TileLayerSpec

# Type Alias: TileLayerSpec

> **TileLayerSpec** = [`TileLayerCommonSpec`](../interfaces/TileLayerCommonSpec.md) & \{ `attributions?`: `never`; `baseUrl?`: `never`; `ownership?`: `never`; `preset`: `"osm"`; `source?`: `never`; `tileUrlFunction?`: `never`; `url?`: `never`; \} \| \{ `attributions?`: `string` \| readonly `string`[]; `baseUrl?`: `never`; `ownership?`: `never`; `preset`: `"xyz"`; `source?`: `never`; `tileUrlFunction?`: `never`; `url`: `string`; \} \| \{ `attributions?`: `string` \| readonly `string`[]; `baseUrl?`: `never`; `ownership?`: `never`; `preset`: `"xyz"`; `source?`: `never`; `tileUrlFunction`: [`TileUrlFunction`](TileUrlFunction.md); `url?`: `never`; \} \| \{ `attributions?`: `never`; `baseUrl`: `string`; `ownership?`: `never`; `preset`: `"compact-xyz"`; `source?`: `never`; `tileUrlFunction?`: `never`; `url?`: `never`; \} \| \{ `attributions?`: `never`; `baseUrl?`: `never`; `ownership?`: [`LayerOwnership`](LayerOwnership.md); `preset?`: `never`; `source`: `TileSource`; `tileUrlFunction?`: `never`; `url?`: `never`; \}

Defined in: [src/facade/types.ts:73](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L73)

瓦片图层创建配置。不同预设只接受对应的数据源参数。
