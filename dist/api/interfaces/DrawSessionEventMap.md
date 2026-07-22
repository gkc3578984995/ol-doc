[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / DrawSessionEventMap

# Interface: DrawSessionEventMap\<T\>

Defined in: [src/facade/drawTypes.ts:45](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L45)

Draw Session 的事件载荷映射。

## Type Parameters

### T

`T` = `unknown`

完成后的 Element 携带的业务数据类型。

## Properties

### cancel

> `readonly` **cancel**: `Readonly`\<\{ `reason`: `"replaced"` \| `"destroyed"` \| `"cancelled"` \| `"incomplete"` \| `"native"` \| `"error"`; `type`: `"cancel"`; \}\>

Defined in: [src/facade/drawTypes.ts:79](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L79)

取消事件。当前草图或整个 Session 被取消时触发。

***

### change

> `readonly` **change**: `Readonly`\<\{ `coordinate?`: [`Coordinate`](../type-aliases/Coordinate.md); `geometry`: [`ShapeState`](../type-aliases/ShapeState.md); `type`: `"change"`; \}\>

Defined in: [src/facade/drawTypes.ts:54](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L54)

变化事件。当前草图的预览几何变化时触发。

***

### click

> `readonly` **click**: `Readonly`\<\{ `controlPointCount`: `number`; `coordinate`: [`Coordinate`](../type-aliases/Coordinate.md); `type`: `"click"`; \}\>

Defined in: [src/facade/drawTypes.ts:63](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L63)

点击事件。一个控制点被当前草图接受后触发。

***

### complete

> `readonly` **complete**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"complete"`; \}\>

Defined in: [src/facade/drawTypes.ts:72](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L72)

完成事件。Element 成功提交到 Store 后触发。

***

### start

> `readonly` **start**: `Readonly`\<\{ `coordinate`: [`Coordinate`](../type-aliases/Coordinate.md); `type`: `"start"`; \}\>

Defined in: [src/facade/drawTypes.ts:47](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L47)

开始事件。首个控制点或自由绘制手势开始时触发。
