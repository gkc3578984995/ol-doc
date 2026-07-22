[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / EditSessionEventMap

# Interface: EditSessionEventMap\<T\>

Defined in: [src/facade/drawTypes.ts:92](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L92)

Edit Session 的事件载荷映射。

## Type Parameters

### T

`T` = `unknown`

目标 Element 携带的业务数据类型。

## Properties

### cancel

> `readonly` **cancel**: `Readonly`\<\{ `reason`: `"replaced"` \| `"destroyed"` \| `"cancelled"` \| `"external-change"` \| `"external-remove"` \| `"error"`; `type`: `"cancel"`; \}\>

Defined in: [src/facade/drawTypes.ts:114](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L114)

取消事件。Edit Session 未提交结果而结束时触发。

***

### complete

> `readonly` **complete**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"complete"`; \}\>

Defined in: [src/facade/drawTypes.ts:107](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L107)

完成事件。编辑结果成功提交到 Store 后触发。

***

### modifying

> `readonly` **modifying**: `Readonly`\<\{ `coordinate?`: [`Coordinate`](../type-aliases/Coordinate.md); `element`: [`Element`](../classes/Element.md)\<`T`\>; `geometry`: [`ShapeState`](../type-aliases/ShapeState.md); `operation`: `"move"` \| `"insert"` \| `"remove"` \| `"undo"` \| `"redo"`; `type`: `"modifying"`; \}\>

Defined in: [src/facade/drawTypes.ts:94](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L94)

修改事件。工作几何发生变化且尚未提交时触发。
