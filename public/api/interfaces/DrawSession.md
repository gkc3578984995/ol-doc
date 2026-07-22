[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / DrawSession

# Interface: DrawSession\<T\>

Defined in: [src/facade/drawTypes.ts:127](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L127)

一次 Draw 交互的公共 Session 句柄。

## Type Parameters

### T

`T` = `unknown`

绘制结果携带的业务数据类型。

## Properties

### finished

> `readonly` **finished**: `Promise`\<readonly [`Element`](../classes/Element.md)\<`T`\>[]\>

Defined in: [src/facade/drawTypes.ts:133](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L133)

Session 进入终态后解析为最终绘制结果。

***

### results

> `readonly` **results**: readonly [`Element`](../classes/Element.md)\<`T`\>[]

Defined in: [src/facade/drawTypes.ts:131](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L131)

本次 Session 已完成、选择保留且仍有效的 Element。

***

### status

> `readonly` **status**: [`InteractionStatus`](../type-aliases/InteractionStatus.md)

Defined in: [src/facade/drawTypes.ts:129](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L129)

Session 当前处于活动、完成或取消状态。

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [src/facade/drawTypes.ts:161](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L161)

取消当前 Session，并丢弃尚未完成的草图。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.draw.start({ type: 'polyline', layerId: 'default' });
session.cancel();
```

***

### destroy()

> **destroy**(): `void`

Defined in: [src/facade/drawTypes.ts:175](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L175)

销毁 Session 并释放其交互资源。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.draw.start({ type: 'polygon', layerId: 'default' });
session.destroy();
```

***

### finish()

> **finish**(): `void`

Defined in: [src/facade/drawTypes.ts:147](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L147)

完成当前草图并结束 Draw Session。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.draw.start({ type: 'point', layerId: 'default' });
session.finish();
```

***

### on()

> **on**\<`K`\>(`type`, `listener`): () => `void`

Defined in: [src/facade/drawTypes.ts:224](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L224)

订阅指定的 Draw Session 事件。

#### Type Parameters

##### K

`K` *extends* keyof [`DrawSessionEventMap`](DrawSessionEventMap.md)\<`T`\>

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
const session = earth.draw.start({ type: 'point', layerId: 'default' });
const off = session.on('complete', ({ element }) => console.log(element.id));
off();
```

***

### redo()

> **redo**(): `boolean`

Defined in: [src/facade/drawTypes.ts:205](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L205)

重做当前未完成草图的下一步。

#### Returns

`boolean`

成功重做时返回 `true`，没有可重做步骤时返回 `false`。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.draw.start({ type: 'polyline', layerId: 'default' });
const changed = session.redo();
```

***

### undo()

> **undo**(): `boolean`

Defined in: [src/facade/drawTypes.ts:190](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L190)

撤销当前未完成草图的最近一步。

#### Returns

`boolean`

成功撤销时返回 `true`，没有可撤销步骤时返回 `false`。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.draw.start({ type: 'polyline', layerId: 'default' });
const changed = session.undo();
```
