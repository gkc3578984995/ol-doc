[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / MeasureSession

# Interface: MeasureSession

Defined in: [src/facade/measureTypes.ts:97](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L97)

一次测量交互的公共 Session 句柄。

## Properties

### finished

> `readonly` **finished**: `Promise`\<[`MeasureResult`](MeasureResult.md) \| `undefined`\>

Defined in: [src/facade/measureTypes.ts:101](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L101)

成功完成时解析为测量结果，取消时解析为 `undefined`。

***

### status

> `readonly` **status**: [`InteractionStatus`](../type-aliases/InteractionStatus.md)

Defined in: [src/facade/measureTypes.ts:99](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L99)

Session 当前处于活动、完成或取消状态。

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [src/facade/measureTypes.ts:129](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L129)

取消当前测量并丢弃未完成结果。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.measure.start({ type: 'area' });
session.cancel();
```

***

### finish()

> **finish**(): `void`

Defined in: [src/facade/measureTypes.ts:115](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L115)

尝试完成当前测量并结束 Session。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.measure.start({ type: 'distance-total' });
session.finish();
```

***

### on()

> **on**\<`K`\>(`type`, `listener`): () => `void`

Defined in: [src/facade/measureTypes.ts:148](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L148)

订阅指定的 Measure Session 事件。

#### Type Parameters

##### K

`K` *extends* keyof [`MeasureSessionEventMap`](MeasureSessionEventMap.md)

要订阅的事件名称类型。

#### Parameters

##### type

`K`

事件名称。

##### listener

(`event`) => `void`

接收对应只读载荷的监听函数。

#### Returns

用于取消本次订阅的幂等函数。

() => `void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.measure.start({ type: 'distance-total' });
const off = session.on('change', ({ result }) => console.log(result.formatted));
off();
```
