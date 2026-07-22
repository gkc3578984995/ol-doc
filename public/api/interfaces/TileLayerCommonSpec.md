[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / TileLayerCommonSpec

# Interface: TileLayerCommonSpec

Defined in: [src/facade/types.ts:59](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L59)

瓦片图层通用配置。

## Properties

### id?

> `optional` **id?**: `string`

Defined in: [src/facade/types.ts:63](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L63)

图层 ID。省略时由引擎自动生成。

***

### kind

> **kind**: `"tile"`

Defined in: [src/facade/types.ts:61](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L61)

固定为 `tile`。

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [src/facade/types.ts:67](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L67)

透明度。取值范围为 0 到 1。

***

### visible?

> `optional` **visible?**: `boolean`

Defined in: [src/facade/types.ts:65](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L65)

图层创建后是否可见。

***

### zIndex?

> `optional` **zIndex?**: `number`

Defined in: [src/facade/types.ts:69](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L69)

图层层级；数值越大越靠上。
