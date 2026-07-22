[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / TileLayerCommonSpec

# Interface: TileLayerCommonSpec

Defined in: [src/facade/types.ts:58](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L58)

瓦片图层通用配置。

## Properties

### id?

> `optional` **id?**: `string`

Defined in: [src/facade/types.ts:62](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L62)

图层 ID。省略时由引擎自动生成。

***

### kind

> **kind**: `"tile"`

Defined in: [src/facade/types.ts:60](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L60)

固定为 `tile`。

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [src/facade/types.ts:66](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L66)

透明度。取值范围为 0 到 1。

***

### visible?

> `optional` **visible?**: `boolean`

Defined in: [src/facade/types.ts:64](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L64)

图层创建后是否可见。

***

### zIndex?

> `optional` **zIndex?**: `number`

Defined in: [src/facade/types.ts:68](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L68)

图层层级；数值越大越靠上。
