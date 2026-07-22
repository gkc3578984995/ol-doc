[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / DescriptorHandle

# Interface: DescriptorHandle\<T\>

Defined in: [src/facade/overlayTypes.ts:316](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L316)

Descriptor 的公开控制句柄。

## Type Parameters

### T

`T` = `unknown`

Descriptor 携带的业务数据类型。

## Properties

### id

> `readonly` **id**: `string`

Defined in: [src/facade/overlayTypes.ts:318](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L318)

当前 Descriptor 的唯一 ID。

***

### visible

> `readonly` **visible**: `boolean`

Defined in: [src/facade/overlayTypes.ts:320](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L320)

当前 Descriptor 是否可见。

## Methods

### close()

> **close**(): `void`

Defined in: [src/facade/overlayTypes.ts:389](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L389)

按配置执行隐藏或销毁关闭行为。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.overlays.createDescriptor({ type: 'custom', content: '信息', position: [120, 30] }).close();
```

***

### destroy()

> **destroy**(): `void`

Defined in: [src/facade/overlayTypes.ts:420](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L420)

销毁当前 Descriptor 并释放其资源。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.overlays.createDescriptor({ type: 'custom', content: '信息', position: [120, 30] }).destroy();
```

***

### hide()

> **hide**(): `void`

Defined in: [src/facade/overlayTypes.ts:376](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L376)

隐藏当前 Descriptor。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.overlays.createDescriptor({ type: 'custom', content: '信息', position: [120, 30] }).hide();
```

***

### on()

> **on**(`type`, `listener`): () => `void`

Defined in: [src/facade/overlayTypes.ts:407](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L407)

订阅 Descriptor 的点击或关闭事件。

#### Parameters

##### type

`"click"` \| `"close"`

要订阅的 Descriptor 事件名称。

##### listener

(`event`) => `void`

接收对应载荷的监听函数。

#### Returns

用于取消本次订阅的幂等函数。

() => `void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const descriptor = earth.overlays.createDescriptor({ type: 'custom', content: '信息', position: [120, 30] });
const off = descriptor.on('close', () => console.log('closed'));
off();
```

***

### setPosition()

> **setPosition**(`position`): `void`

Defined in: [src/facade/overlayTypes.ts:350](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L350)

设置 Descriptor 的地图坐标。

#### Parameters

##### position

[`Coordinate`](../type-aliases/Coordinate.md)

新的地图坐标。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const descriptor = earth.overlays.createDescriptor({ type: 'custom', content: '信息', position: [120, 30] });
descriptor.setPosition([121, 31]);
```

***

### show()

> **show**(): `void`

Defined in: [src/facade/overlayTypes.ts:363](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L363)

显示当前 Descriptor。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.overlays.createDescriptor({ type: 'custom', content: '信息', position: [120, 30] }).show();
```

***

### update()

> **update**(`patch`): `void`

Defined in: [src/facade/overlayTypes.ts:335](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L335)

批量更新当前 Descriptor。

#### Parameters

##### patch

[`DescriptorPatch`](DescriptorPatch.md)\<`T`\>

要合并到当前 Descriptor 的内容。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const descriptor = earth.overlays.createDescriptor({ type: 'custom', content: '信息', position: [120, 30] });
descriptor.update({ header: '目标信息' });
```
