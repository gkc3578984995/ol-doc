[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / StyleService

# Interface: StyleService

Defined in: [src/facade/styleTypes.ts:17](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/styleTypes.ts#L17)

管理 Element 样式的公开服务。

## Methods

### patch()

> **patch**(`selector`, `patch`): `void`

Defined in: [src/facade/styleTypes.ts:47](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/styleTypes.ts#L47)

局部更新匹配 Element 的结构化样式。

#### Parameters

##### selector

[`ElementSelector`](ElementSelector.md)

待更新 Element 的选择器。

##### patch

[`StylePatch`](../type-aliases/StylePatch.md)

要合并到现有结构化样式的内容。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.styles.patch({ id: 'target' }, { zIndex: 10 });
```

***

### set()

> **set**(`selector`, `style`): `void`

Defined in: [src/facade/styleTypes.ts:32](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/styleTypes.ts#L32)

完整替换匹配 Element 的样式。

#### Parameters

##### selector

[`ElementSelector`](ElementSelector.md)

待更新 Element 的选择器。

##### style

[`StyleInput`](../type-aliases/StyleInput.md)

新的结构化样式或原生样式。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.styles.set({ module: 'planning' }, { strokes: [{ color: '#3388ff', width: 2 }] });
```
