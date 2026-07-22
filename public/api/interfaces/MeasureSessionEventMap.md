[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / MeasureSessionEventMap

# Interface: MeasureSessionEventMap

Defined in: [src/facade/measureTypes.ts:72](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L72)

Measure Session 的事件载荷映射。

## Properties

### cancel

> `readonly` **cancel**: `Readonly`\<\{ `reason`: `"replaced"` \| `"destroyed"` \| `"cancelled"` \| `"incomplete"` \| `"native"` \| `"error"`; `type`: `"cancel"`; \}\>

Defined in: [src/facade/measureTypes.ts:88](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L88)

取消事件。Measure Session 未产生最终结果而结束时触发。

***

### change

> `readonly` **change**: `Readonly`\<\{ `result`: [`MeasureResult`](MeasureResult.md); `type`: `"change"`; \}\>

Defined in: [src/facade/measureTypes.ts:74](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L74)

变化事件。测量预览结果发生变化时触发。

***

### complete

> `readonly` **complete**: `Readonly`\<\{ `result`: [`MeasureResult`](MeasureResult.md); `type`: `"complete"`; \}\>

Defined in: [src/facade/measureTypes.ts:81](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L81)

完成事件。测量结果被确认并提交时触发。
