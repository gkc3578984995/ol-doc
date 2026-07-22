[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / EventService

# Interface: EventService

Defined in: [src/facade/EventFacade.ts:102](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L102)

订阅 Earth 指针和键盘事件的公开服务。

## Methods

### clearModule()

> **clearModule**(`module`, `type?`): `void`

Defined in: [src/facade/EventFacade.ts:182](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L182)

清除指定业务模块的事件订阅。

#### Parameters

##### module

`string`

要清理订阅的业务模块。

##### type?

[`EarthEventType`](../type-aliases/EarthEventType.md)

事件名称；省略时清理该模块的全部事件。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.events.clearModule('planning', 'click');
```

***

### has()

> **has**(`type`, `module?`): `boolean`

Defined in: [src/facade/EventFacade.ts:167](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L167)

判断指定事件是否存在订阅。

#### Parameters

##### type

[`EarthEventType`](../type-aliases/EarthEventType.md)

要检查的公共事件名称。

##### module?

`string`

传入时只检查该业务模块；省略时只检查全局订阅，不含选择器或模块订阅。

#### Returns

`boolean`

存在匹配订阅时返回 `true`，否则返回 `false`。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const subscribed = earth.events.has('click', 'planning');
```

***

### on()

> **on**\<`T`\>(`type`, `listener`, `options?`): () => `void`

Defined in: [src/facade/EventFacade.ts:121](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L121)

持续订阅一种 Earth 事件。

#### Type Parameters

##### T

`T` *extends* [`EarthEventType`](../type-aliases/EarthEventType.md)

要订阅的事件名称类型。

#### Parameters

##### type

`T`

公共事件名称。

##### listener

(`event`) => `void`

接收对应公共载荷的监听函数。

##### options?

`"keydown"` *extends* `T` ? `Pick`\<[`EventSubscriptionOptions`](../type-aliases/EventSubscriptionOptions.md), `"signal"`\> & `Readonly`\<`Partial`\<`Record`\<`"module"` \| `"selector"`, `never`\>\>\> : [`EventSubscriptionOptions`](../type-aliases/EventSubscriptionOptions.md)

可选的中止信号和指针事件过滤条件。

#### Returns

用于取消本次订阅的幂等函数。

() => `void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const off = earth.events.on('click', ({ coordinate }) => console.log(coordinate));
off();
```

***

### once()

> **once**\<`T`\>(`type`, `listener`, `options?`): () => `void`

Defined in: [src/facade/EventFacade.ts:145](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L145)

订阅一种 Earth 事件并在首次触发后自动取消。

#### Type Parameters

##### T

`T` *extends* [`EarthEventType`](../type-aliases/EarthEventType.md)

要订阅的事件名称类型。

#### Parameters

##### type

`T`

只订阅一次的公共事件名称。

##### listener

(`event`) => `void`

接收对应公共载荷的监听函数。

##### options?

`"keydown"` *extends* `T` ? `Pick`\<[`EventSubscriptionOptions`](../type-aliases/EventSubscriptionOptions.md), `"signal"`\> & `Readonly`\<`Partial`\<`Record`\<`"module"` \| `"selector"`, `never`\>\>\> : [`EventSubscriptionOptions`](../type-aliases/EventSubscriptionOptions.md)

可选的中止信号和指针事件过滤条件。

#### Returns

用于提前取消本次订阅的幂等函数。

() => `void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.events.once('rightclick', ({ pixel }) => console.log(pixel));
```
