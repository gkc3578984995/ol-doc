[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / useEarth

# Function: useEarth()

解析重载参数后获取或创建默认/命名 Earth。

## Call Signature

> **useEarth**(): [`Earth`](../classes/Earth.md)

Defined in: [src/facade/useEarth.ts:37](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/useEarth.ts#L37)

获取或创建默认 Earth 实例。

### Returns

[`Earth`](../classes/Earth.md)

默认 Earth；尚未创建或已销毁时返回新实例。

### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
```

## Call Signature

> **useEarth**(`id`): [`Earth`](../classes/Earth.md)

Defined in: [src/facade/useEarth.ts:51](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/useEarth.ts#L51)

获取或创建指定 ID 的 Earth 实例。

### Parameters

#### id

`string`

实例 ID；首次创建时也作为默认挂载目标。

### Returns

[`Earth`](../classes/Earth.md)

对应的命名 Earth；同一 ID 始终返回当前活动实例。

### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const planning = useEarth('planning');
```

## Call Signature

> **useEarth**(`options`): [`Earth`](../classes/Earth.md)

Defined in: [src/facade/useEarth.ts:71](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/useEarth.ts#L71)

获取或创建带配置的 Earth 实例。

配置只在对应实例首次创建时生效。

### Parameters

#### options

[`UseEarthOptions`](../interfaces/UseEarthOptions.md)

实例 ID、挂载目标、View 和控件配置。

### Returns

[`Earth`](../classes/Earth.md)

默认或命名 Earth 实例。

### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth({
  id: 'overview',
  target: 'overview-map',
  view: { zoom: 5 }
});
```
