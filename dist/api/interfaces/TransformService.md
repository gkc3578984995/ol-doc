[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / TransformService

# Interface: TransformService

Defined in: [src/facade/transformTypes.ts:535](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L535)

变换和顶点编辑 Element 的公开服务。

## Methods

### select()

> **select**\<`T`\>(`element`, `options?`): [`TransformSession`](TransformSession.md)\<`T`\>

Defined in: [src/facade/transformTypes.ts:568](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L568)

启动 Transform Session 并立即选择指定 Element。

#### Type Parameters

##### T

`T`

Element 携带的业务数据类型。

#### Parameters

##### element

[`Element`](../classes/Element.md)\<`T`\>

属于当前 Earth、且仍有效的 Element 句柄。

##### options?

[`TransformOptions`](TransformOptions.md)

目标范围、变换能力、工具栏和交互冲突策略。

#### Returns

[`TransformSession`](TransformSession.md)\<`T`\>

已选择目标且处于活动状态的 Transform Session。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) earth.transform.select(element, { toolbar: true });
```

***

### start()

> **start**(`options?`): [`TransformSession`](TransformSession.md)

Defined in: [src/facade/transformTypes.ts:550](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L550)

启动一个等待选择 Element 的 Transform Session。

#### Parameters

##### options?

[`TransformOptions`](TransformOptions.md)

目标范围、变换能力、工具栏和交互冲突策略。

#### Returns

[`TransformSession`](TransformSession.md)

已打开且处于活动状态的 Transform Session。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.transform.start({ toolbar: true });
```
