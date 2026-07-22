[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / VectorLayerSpec

# Interface: VectorLayerSpec

Defined in: [src/facade/types.ts:41](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L41)

矢量图层创建配置。

## Properties

### declutter?

> `optional` **declutter?**: `boolean`

Defined in: [src/facade/types.ts:55](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L55)

文字和图标是否自动避让。

***

### id?

> `optional` **id?**: `string`

Defined in: [src/facade/types.ts:45](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L45)

图层 ID。省略时由引擎自动生成。

***

### kind

> **kind**: `"vector"`

Defined in: [src/facade/types.ts:43](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L43)

固定为 `vector`。

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [src/facade/types.ts:49](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L49)

透明度。取值范围为 0 到 1。

***

### visible?

> `optional` **visible?**: `boolean`

Defined in: [src/facade/types.ts:47](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L47)

图层创建后是否可见。

***

### wrapX?

> `optional` **wrapX?**: `boolean`

Defined in: [src/facade/types.ts:53](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L53)

矢量 Feature 是否跨世界重复显示。

***

### zIndex?

> `optional` **zIndex?**: `number`

Defined in: [src/facade/types.ts:51](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L51)

图层层级；数值越大越靠上。
