[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / OverlayHandle

# Interface: OverlayHandle\<T\>

Defined in: [src/facade/overlayTypes.ts:97](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L97)

Overlay 的公开控制句柄。

## Type Parameters

### T

`T` = `unknown`

Overlay 携带的业务数据类型。

## Properties

### id

> `readonly` **id**: `string`

Defined in: [src/facade/overlayTypes.ts:99](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L99)

当前 Overlay 的唯一 ID。

***

### position

> `readonly` **position**: [`Coordinate`](../type-aliases/Coordinate.md) \| `undefined`

Defined in: [src/facade/overlayTypes.ts:101](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L101)

当前地图坐标的只读快照。

***

### visible

> `readonly` **visible**: `boolean`

Defined in: [src/facade/overlayTypes.ts:103](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L103)

当前 Overlay 是否可见。

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [src/facade/overlayTypes.ts:186](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L186)

销毁当前 Overlay 并释放其资源。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.overlays.get('popup')?.destroy();
```

***

### hide()

> **hide**(): `void`

Defined in: [src/facade/overlayTypes.ts:159](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L159)

隐藏当前 Overlay。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.overlays.get('popup')?.hide();
```

***

### panIntoView()

> **panIntoView**(`options?`): `void`

Defined in: [src/facade/overlayTypes.ts:173](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L173)

平移地图视图以完整显示当前 Overlay。

#### Parameters

##### options?

[`PanIntoViewSpec`](PanIntoViewSpec.md)

边距、动画时长和缓动参数。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.overlays.get('popup')?.panIntoView({ margin: 24, duration: 250 });
```

***

### setPosition()

> **setPosition**(`position`): `void`

Defined in: [src/facade/overlayTypes.ts:133](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L133)

设置或清除 Overlay 的地图坐标。

#### Parameters

##### position

[`Coordinate`](../type-aliases/Coordinate.md) \| `undefined`

新的地图坐标；传入 `undefined` 时清除定位。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const overlay = earth.overlays.add({ element: document.createElement('div') });
overlay.setPosition([120, 30]);
```

***

### show()

> **show**(): `void`

Defined in: [src/facade/overlayTypes.ts:146](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L146)

显示当前 Overlay。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.overlays.get('popup')?.show();
```

***

### update()

> **update**(`patch`): `void`

Defined in: [src/facade/overlayTypes.ts:118](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L118)

批量更新当前 Overlay。

#### Parameters

##### patch

[`OverlayPatch`](OverlayPatch.md)\<`T`\>

要合并到当前 Overlay 的内容。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const overlay = earth.overlays.add({ element: document.createElement('div') });
overlay.update({ position: [120, 30], visible: true });
```
