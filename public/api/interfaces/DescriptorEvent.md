[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / DescriptorEvent

# Interface: DescriptorEvent\<T\>

Defined in: [src/facade/overlayTypes.ts:213](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L213)

Descriptor 的公开事件载荷。

## Type Parameters

### T

`T` = `unknown`

Descriptor 携带的业务数据类型。

## Properties

### data

> `readonly` **data**: `Readonly`\<`T`\> \| `undefined`

Defined in: [src/facade/overlayTypes.ts:219](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L219)

Descriptor 当前业务数据的只读值。

***

### descriptor

> `readonly` **descriptor**: [`DescriptorHandle`](DescriptorHandle.md)\<`T`\>

Defined in: [src/facade/overlayTypes.ts:217](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L217)

触发事件的实时 Descriptor 句柄。

***

### index?

> `readonly` `optional` **index?**: `number`

Defined in: [src/facade/overlayTypes.ts:223](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L223)

点击列表内容时对应的项目索引。

***

### item?

> `readonly` `optional` **item?**: `Readonly`\<[`DescriptorListItem`](DescriptorListItem.md)\<`string` \| `number`\>\>

Defined in: [src/facade/overlayTypes.ts:221](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L221)

点击列表内容时对应的项目。

***

### type

> `readonly` **type**: `"click"` \| `"close"`

Defined in: [src/facade/overlayTypes.ts:215](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L215)

列表点击或关闭。
