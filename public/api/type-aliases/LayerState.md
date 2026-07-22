[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / LayerState

# Type Alias: LayerState

> **LayerState** = \{ `declutter`: `boolean`; `id`: `string`; `kind`: `"vector"`; `opacity`: `number`; `visible`: `boolean`; `wrapX`: `boolean`; `zIndex?`: `number`; \} \| \{ `id`: `string`; `kind`: `"tile"` \| `"native"`; `opacity`: `number`; `visible`: `boolean`; `zIndex?`: `number`; \}

Defined in: [src/facade/types.ts:195](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L195)

图层状态。根据图层类型返回对应字段。

## Union Members

### Type Literal

\{ `declutter`: `boolean`; `id`: `string`; `kind`: `"vector"`; `opacity`: `number`; `visible`: `boolean`; `wrapX`: `boolean`; `zIndex?`: `number`; \}

#### declutter

> `readonly` **declutter**: `boolean`

文字和图标是否自动避让。

#### id

> `readonly` **id**: `string`

图层的唯一 ID。

#### kind

> `readonly` **kind**: `"vector"`

固定为 `vector`。

#### opacity

> `readonly` **opacity**: `number`

透明度。取值范围为 0 到 1。

#### visible

> `readonly` **visible**: `boolean`

图层当前是否可见。

#### wrapX

> `readonly` **wrapX**: `boolean`

Feature 是否跨世界重复显示。

#### zIndex?

> `readonly` `optional` **zIndex?**: `number`

图层层级；数值越大越靠上。

***

### Type Literal

\{ `id`: `string`; `kind`: `"tile"` \| `"native"`; `opacity`: `number`; `visible`: `boolean`; `zIndex?`: `number`; \}

#### id

> `readonly` **id**: `string`

图层的唯一 ID。

#### kind

> `readonly` **kind**: `"tile"` \| `"native"`

瓦片或原生图层。

#### opacity

> `readonly` **opacity**: `number`

透明度。取值范围为 0 到 1。

#### visible

> `readonly` **visible**: `boolean`

图层当前是否可见。

#### zIndex?

> `readonly` `optional` **zIndex?**: `number`

图层层级；数值越大越靠上。
