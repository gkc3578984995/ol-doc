[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / TransformToolbarHandle

# Interface: TransformToolbarHandle

Defined in: [src/facade/transformTypes.ts:258](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L258)

Transform 工具栏的公开控制句柄。

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [src/facade/transformTypes.ts:364](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L364)

销毁当前工具栏视图。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) {
  const session = earth.transform.select(element, { toolbar: true });
  session.toolbar?.destroy();
}
```

***

### hide()

> **hide**(): `void`

Defined in: [src/facade/transformTypes.ts:347](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L347)

隐藏当前工具栏。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) {
  const session = earth.transform.select(element, { toolbar: true });
  session.toolbar?.hide();
}
```

***

### setActive()

> **setActive**(`key`): `void`

Defined in: [src/facade/transformTypes.ts:276](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L276)

激活指定工具栏项目的视图状态。

#### Parameters

##### key

`string`

要显示为激活状态的项目标识。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) {
  const session = earth.transform.select(element, { toolbar: true });
  session.toolbar?.setActive('edit');
}
```

***

### show()

> **show**(): `void`

Defined in: [src/facade/transformTypes.ts:330](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L330)

显示当前工具栏。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) {
  const session = earth.transform.select(element, { toolbar: true });
  session.toolbar?.show();
}
```

***

### updateItem()

> **updateItem**(`key`, `patch`): `void`

Defined in: [src/facade/transformTypes.ts:295](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L295)

更新指定工具栏项目的视图属性。

#### Parameters

##### key

`string`

待更新的项目标识。

##### patch

[`TransformToolbarItemPatch`](TransformToolbarItemPatch.md)

要合并到项目状态的内容。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) {
  const session = earth.transform.select(element, { toolbar: true });
  session.toolbar?.updateItem('remove', { disabled: true });
}
```

***

### updateOptions()

> **updateOptions**(`patch`): `void`

Defined in: [src/facade/transformTypes.ts:313](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/transformTypes.ts#L313)

更新工具栏的位置、偏移、类名或可见状态。

#### Parameters

##### patch

[`TransformToolbarOptionsPatch`](TransformToolbarOptionsPatch.md)

要合并到工具栏视图的内容。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const element = earth.elements.get('target');
if (element) {
  const session = earth.transform.select(element, { toolbar: true });
  session.toolbar?.updateOptions({ offset: [20, 8] });
}
```
