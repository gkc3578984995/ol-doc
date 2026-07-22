[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / OverlayService

# Interface: OverlayService

Defined in: [src/facade/overlayTypes.ts:424](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L424)

管理 Overlay 和 Descriptor 的公开服务。

## Methods

### add()

> **add**\<`T`\>(`spec`): [`OverlayHandle`](OverlayHandle.md)\<`T`\>

Defined in: [src/facade/overlayTypes.ts:440](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L440)

创建并注册一个 Overlay。

#### Type Parameters

##### T

`T`

Overlay 携带的业务数据类型。

#### Parameters

##### spec

[`OverlaySpec`](OverlaySpec.md)\<`T`\>

DOM 元素、定位、行为和业务数据。

#### Returns

[`OverlayHandle`](OverlayHandle.md)\<`T`\>

新创建的 Overlay 控制句柄。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const overlay = earth.overlays.add({ id: 'popup', element: document.createElement('div'), position: [120, 30] });
```

***

### clear()

> **clear**(): `void`

Defined in: [src/facade/overlayTypes.ts:500](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L500)

清除服务管理的全部 Overlay 和 Descriptor。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.overlays.clear();
```

***

### createDescriptor()

> **createDescriptor**\<`T`\>(`spec`): [`DescriptorHandle`](DescriptorHandle.md)\<`T`\>

Defined in: [src/facade/overlayTypes.ts:516](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L516)

创建一个内置样式的 Descriptor。

#### Type Parameters

##### T

`T`

Descriptor 携带的业务数据类型。

#### Parameters

##### spec

[`DescriptorSpec`](../type-aliases/DescriptorSpec.md)\<`T`\>

内容、定位、交互和业务数据。

#### Returns

[`DescriptorHandle`](DescriptorHandle.md)\<`T`\>

新创建的 Descriptor 控制句柄。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const descriptor = earth.overlays.createDescriptor({ type: 'custom', content: '目标', position: [120, 30] });
```

***

### get()

> **get**\<`T`\>(`id`): [`OverlayHandle`](OverlayHandle.md)\<`T`\> \| `undefined`

Defined in: [src/facade/overlayTypes.ts:456](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L456)

按 ID 获取仍然有效的 Overlay。

#### Type Parameters

##### T

`T`

Overlay 携带的业务数据类型。

#### Parameters

##### id

`string`

要获取的 Overlay ID。

#### Returns

[`OverlayHandle`](OverlayHandle.md)\<`T`\> \| `undefined`

匹配的 Overlay 句柄，不存在时返回 `undefined`。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const overlay = earth.overlays.get('popup');
```

***

### query()

> **query**\<`T`\>(`selector?`): readonly [`OverlayHandle`](OverlayHandle.md)\<`T`\>[]

Defined in: [src/facade/overlayTypes.ts:472](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L472)

查询匹配条件的 Overlay。

#### Type Parameters

##### T

`T`

Overlay 携带的业务数据类型。

#### Parameters

##### selector?

[`OverlaySelector`](OverlaySelector.md)\<`T`\>

ID、业务模块、可见状态和自定义筛选条件。

#### Returns

readonly [`OverlayHandle`](OverlayHandle.md)\<`T`\>[]

匹配条件的 Overlay 句柄只读列表。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const overlays = earth.overlays.query({ module: 'planning', visible: true });
```

***

### remove()

> **remove**(`selector`): `number`

Defined in: [src/facade/overlayTypes.ts:487](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L487)

移除匹配条件的 Overlay。

#### Parameters

##### selector

[`OverlaySelector`](OverlaySelector.md)

待移除 Overlay 的查询条件。

#### Returns

`number`

实际移除的 Overlay 数量。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const removed = earth.overlays.remove({ module: 'planning' });
```
