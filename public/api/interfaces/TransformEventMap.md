[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / TransformEventMap

# Interface: TransformEventMap\<T\>

Defined in: [src/facade/transformTypes.ts:122](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L122)

Transform Session 的事件载荷映射。

## Type Parameters

### T

`T` = `unknown`

Element 携带的业务数据类型。

## Properties

### copyPreviewCancel

> **copyPreviewCancel**: `Readonly`\<\{ `type`: `"copyPreviewCancel"`; \}\>

Defined in: [src/facade/transformTypes.ts:237](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L237)

复制取消事件。复制预览被取消时触发。

***

### copyPreviewConfirm

> **copyPreviewConfirm**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"copyPreviewConfirm"`; \}\>

Defined in: [src/facade/transformTypes.ts:230](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L230)

复制完成事件。直接复制成功或确认复制预览并创建 Element 时触发。

***

### edit

> **edit**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"edit"`; \}\>

Defined in: [src/facade/transformTypes.ts:223](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L223)

编辑事件。顶点编辑结果发生变化时触发。

***

### enterHandle

> **enterHandle**: `Readonly`\<\{ `cursor?`: `string`; `element`: [`Element`](../classes/Element.md)\<`T`\>; `key`: `string`; `type`: `"enterHandle"`; \}\>

Defined in: [src/facade/transformTypes.ts:138](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L138)

进入手柄事件。指针进入控制手柄时触发。

***

### error

> **error**: `Readonly`\<\{ `error`: `unknown`; `type`: `"error"`; \}\>

Defined in: [src/facade/transformTypes.ts:249](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L249)

错误事件。Session 捕获操作错误时触发。

***

### leaveHandle

> **leaveHandle**: `Readonly`\<\{ `cursor?`: `string`; `element`: [`Element`](../classes/Element.md)\<`T`\>; `key`: `string`; `type`: `"leaveHandle"`; \}\>

Defined in: [src/facade/transformTypes.ts:149](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L149)

离开手柄事件。指针离开控制手柄时触发。

***

### remove

> **remove**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"remove"`; \}\>

Defined in: [src/facade/transformTypes.ts:242](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L242)

删除事件。当前选中的 Element 被移除时触发。

***

### rotateEnd

> **rotateEnd**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"rotateEnd"`; \}\>

Defined in: [src/facade/transformTypes.ts:195](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L195)

旋转结束事件。一次旋转操作结束时触发。

***

### rotateStart

> **rotateStart**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"rotateStart"`; \}\>

Defined in: [src/facade/transformTypes.ts:181](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L181)

旋转开始事件。一次旋转操作开始时触发。

***

### rotating

> **rotating**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"rotating"`; \}\>

Defined in: [src/facade/transformTypes.ts:188](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L188)

旋转过程事件。旋转预览发生变化时触发。

***

### scaleEnd

> **scaleEnd**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"scaleEnd"`; \}\>

Defined in: [src/facade/transformTypes.ts:216](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L216)

缩放结束事件。一次缩放或拉伸操作结束时触发。

***

### scaleStart

> **scaleStart**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"scaleStart"`; \}\>

Defined in: [src/facade/transformTypes.ts:202](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L202)

缩放开始事件。一次缩放或拉伸操作开始时触发。

***

### scaling

> **scaling**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"scaling"`; \}\>

Defined in: [src/facade/transformTypes.ts:209](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L209)

缩放过程事件。缩放或拉伸预览发生变化时触发。

***

### select

> **select**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"select"`; \}\>

Defined in: [src/facade/transformTypes.ts:124](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L124)

选择事件。Element 进入当前 Transform Session 时触发。

***

### selectEnd

> **selectEnd**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"selectEnd"`; \}\>

Defined in: [src/facade/transformTypes.ts:131](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L131)

选择结束事件。Element 离开当前 Transform 选择时触发。

***

### translateEnd

> **translateEnd**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"translateEnd"`; \}\>

Defined in: [src/facade/transformTypes.ts:174](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L174)

平移结束事件。一次平移操作结束时触发。

***

### translateStart

> **translateStart**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"translateStart"`; \}\>

Defined in: [src/facade/transformTypes.ts:160](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L160)

平移开始事件。一次平移操作开始时触发。

***

### translating

> **translating**: `Readonly`\<\{ `element`: [`Element`](../classes/Element.md)\<`T`\>; `type`: `"translating"`; \}\>

Defined in: [src/facade/transformTypes.ts:167](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L167)

平移过程事件。平移预览发生变化时触发。
