[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / EditSession

# Interface: EditSession\<T\>

Defined in: [src/facade/drawTypes.ts:232](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L232)

一次动态编辑交互的公共 Session 句柄。

## Type Parameters

### T

`T` = `unknown`

目标 Element 携带的业务数据类型。

## Properties

### element

> `readonly` **element**: [`Element`](../classes/Element.md)\<`T`\>

Defined in: [src/facade/drawTypes.ts:234](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L234)

启动编辑时传入的实时 Element 句柄。

***

### finished

> `readonly` **finished**: `Promise`\<[`Element`](../classes/Element.md)\<`T`\> \| `undefined`\>

Defined in: [src/facade/drawTypes.ts:238](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L238)

成功提交时解析为目标 Element，取消时解析为 `undefined`。

***

### status

> `readonly` **status**: [`InteractionStatus`](../type-aliases/InteractionStatus.md)

Defined in: [src/facade/drawTypes.ts:236](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L236)

Session 当前处于活动、完成或取消状态。

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [src/facade/drawTypes.ts:266](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L266)

取消编辑且不提交当前工作几何。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) earth.draw.edit(element).cancel();
```

***

### destroy()

> **destroy**(): `void`

Defined in: [src/facade/drawTypes.ts:280](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L280)

销毁 Edit Session 并释放其交互资源。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) earth.draw.edit(element).destroy();
```

***

### finish()

> **finish**(): `void`

Defined in: [src/facade/drawTypes.ts:252](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L252)

原子提交当前工作几何并结束编辑。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) earth.draw.edit(element).finish();
```

***

### on()

> **on**\<`K`\>(`type`, `listener`): () => `void`

Defined in: [src/facade/drawTypes.ts:328](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L328)

订阅指定的 Edit Session 事件。

#### Type Parameters

##### K

`K` *extends* keyof [`EditSessionEventMap`](EditSessionEventMap.md)\<`T`\>

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
const element = earth.elements.get('target');
if (element) earth.draw.edit(element).on('modifying', ({ geometry }) => console.log(geometry));
```

***

### redo()

> **redo**(): `boolean`

Defined in: [src/facade/drawTypes.ts:310](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L310)

重做当前编辑历史的下一步。

#### Returns

`boolean`

成功重做时返回 `true`，没有可重做步骤时返回 `false`。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) earth.draw.edit(element).redo();
```

***

### undo()

> **undo**(): `boolean`

Defined in: [src/facade/drawTypes.ts:295](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L295)

撤销当前编辑历史的最近一步。

#### Returns

`boolean`

成功撤销时返回 `true`，没有可撤销步骤时返回 `false`。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) earth.draw.edit(element).undo();
```
