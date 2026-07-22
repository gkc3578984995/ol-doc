[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / TransformSession

# Interface: TransformSession\<T\>

Defined in: [src/facade/transformTypes.ts:372](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L372)

一次 Transform 交互的公共 Session 句柄。

## Type Parameters

### T

`T` = `unknown`

Element 携带的业务数据类型。

## Properties

### mode

> `readonly` **mode**: [`TransformMode`](../type-aliases/TransformMode.md)

Defined in: [src/facade/transformTypes.ts:378](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L378)

当前使用外包框变换还是顶点编辑。

***

### selected

> `readonly` **selected**: [`Element`](../classes/Element.md)\<`T`\> \| `undefined`

Defined in: [src/facade/transformTypes.ts:374](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L374)

当前选中的实时 Element 句柄。

***

### status

> `readonly` **status**: [`InteractionStatus`](../type-aliases/InteractionStatus.md)

Defined in: [src/facade/transformTypes.ts:376](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L376)

Session 当前处于活动、完成或取消状态。

***

### toolbar

> `readonly` **toolbar**: [`TransformToolbarHandle`](TransformToolbarHandle.md) \| `undefined`

Defined in: [src/facade/transformTypes.ts:380](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L380)

启用工具栏并选中 Element 后可用的控制句柄。

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [src/facade/transformTypes.ts:437](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L437)

取消 Session，并丢弃尚未提交的预览。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.transform.start().cancel();
```

***

### copy()

> **copy**(`options?`): [`Element`](../classes/Element.md)\<`T`\>

Defined in: [src/facade/transformTypes.ts:481](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L481)

立即复制当前选中的 Element。

#### Parameters

##### options?

`Partial`\<`Omit`\<[`ElementState`](ElementState.md)\<`T`\>, `"type"` \| `"id"` \| `"geometry"`\> & `object`\>

新 Element 的可选字段覆盖值。

#### Returns

[`Element`](../classes/Element.md)\<`T`\>

新 Element 的实时句柄。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) earth.transform.select(element).copy({ module: 'copies' });
```

***

### finish()

> **finish**(): `void`

Defined in: [src/facade/transformTypes.ts:424](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L424)

提交当前预览并结束 Session。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.transform.start().finish();
```

***

### on()

> **on**\<`K`\>(`type`, `listener`): () => `void`

Defined in: [src/facade/transformTypes.ts:531](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L531)

订阅指定的 Transform Session 事件。

#### Type Parameters

##### K

`K` *extends* keyof [`TransformEventMap`](TransformEventMap.md)\<`T`\>

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
const session = earth.transform.start();
const off = session.on('select', ({ element }) => console.log(element.id));
off();
```

***

### redo()

> **redo**(): `boolean`

Defined in: [src/facade/transformTypes.ts:465](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L465)

重做当前 Session 的下一次操作。

#### Returns

`boolean`

成功重做时返回 `true`，没有可重做操作时返回 `false`。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const changed = earth.transform.start().redo();
```

***

### remove()

> **remove**(): `void`

Defined in: [src/facade/transformTypes.ts:512](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L512)

删除当前选中的 Element。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) earth.transform.select(element).remove();
```

***

### replaceSelected()

> **replaceSelected**(`element`, `options?`): `void`

Defined in: [src/facade/transformTypes.ts:498](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L498)

使用另一个 Element 替换当前选择。

#### Parameters

##### element

[`Element`](../classes/Element.md)\<`T`\>

属于当前 Earth、且仍有效的 Element 句柄。

##### options?

[`TransformReplaceOptions`](TransformReplaceOptions.md)

是否保留当前 Session 历史。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const first = earth.elements.get('first');
const second = earth.elements.get('second');
if (first && second) earth.transform.select(first).replaceSelected(second);
```

***

### select()

> **select**(`element`): `void`

Defined in: [src/facade/transformTypes.ts:396](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L396)

在当前 Session 中选择一个 Element。

#### Parameters

##### element

[`Element`](../classes/Element.md)\<`T`\>

属于当前 Earth、且仍有效的 Element 句柄。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.transform.start();
const element = earth.elements.get('target');
if (element) session.select(element);
```

***

### setMode()

> **setMode**(`mode`): `void`

Defined in: [src/facade/transformTypes.ts:411](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L411)

切换外包框变换或顶点编辑模式。

#### Parameters

##### mode

[`TransformMode`](../type-aliases/TransformMode.md)

要进入的 Transform 模式。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) earth.transform.select(element).setMode('edit');
```

***

### undo()

> **undo**(): `boolean`

Defined in: [src/facade/transformTypes.ts:451](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L451)

撤销当前 Session 的最近一次操作。

#### Returns

`boolean`

成功撤销时返回 `true`，没有可撤销操作时返回 `false`。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const changed = earth.transform.start().undo();
```
