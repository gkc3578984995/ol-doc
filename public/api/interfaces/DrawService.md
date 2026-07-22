[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / DrawService

# Interface: DrawService

Defined in: [src/facade/drawTypes.ts:332](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L332)

绘制图形和启动动态 Edit Session 的公开服务。

## Methods

### clear()

> **clear**(`selector?`): `number`

Defined in: [src/facade/drawTypes.ts:397](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L397)

移除由绘制服务创建且匹配条件的 Element。

#### Parameters

##### selector?

[`ElementSelector`](ElementSelector.md)\<`unknown`\>

移除条件；省略时清除当前服务拥有的全部 Element。

#### Returns

`number`

实际移除的 Element 数量。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const removed = earth.draw.clear({ module: 'planning' });
```

***

### edit()

> **edit**\<`T`\>(`element`, `options?`): [`EditSession`](EditSession.md)\<`T`\>

Defined in: [src/facade/drawTypes.ts:366](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L366)

为当前 Earth 中仍有效的 Element 启动动态编辑。

#### Type Parameters

##### T

`T`

目标 Element 携带的业务数据类型。

#### Parameters

##### element

[`Element`](../classes/Element.md)\<`T`\>

属于当前 Earth、且仍有效的 Element 句柄。

##### options?

[`EditOptions`](EditOptions.md)

临时底图和交互冲突策略。

#### Returns

[`EditSession`](EditSession.md)\<`T`\>

已打开且处于活动状态的 Edit Session。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) earth.draw.edit(element, { underlay: true });
```

***

### query()

> **query**\<`T`\>(`selector?`): readonly [`Element`](../classes/Element.md)\<`T`\>[]

Defined in: [src/facade/drawTypes.ts:382](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L382)

查询由绘制服务创建且仍然存在的 Element。

#### Type Parameters

##### T

`T`

Element 携带的业务数据类型。

#### Parameters

##### selector?

[`ElementSelector`](ElementSelector.md)\<`T`\>

查询条件；省略时返回当前服务拥有的全部 Element。

#### Returns

readonly [`Element`](../classes/Element.md)\<`T`\>[]

匹配条件且仍有效的实时 Element 只读列表。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const results = earth.draw.query({ module: 'planning' });
```

***

### start()

> **start**\<`T`\>(`options`): [`DrawSession`](DrawSession.md)\<`T`\>

Defined in: [src/facade/drawTypes.ts:348](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L348)

启动 Draw Session。

#### Type Parameters

##### T

`T`

完成后的 Element 携带的业务数据类型。

#### Parameters

##### options

[`DrawOptions`](DrawOptions.md)\<`T`\>

图形类型、目标图层、样式、业务数据和冲突策略。

#### Returns

[`DrawSession`](DrawSession.md)\<`T`\>

已打开且处于活动状态的 Draw Session。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.draw.start({ type: 'point', layerId: 'default' });
```
