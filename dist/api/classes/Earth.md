[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / Earth

# Class: Earth

Defined in: [src/facade/Earth.ts:48](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L48)

地图实例，也是当前地图所有服务和资源的生命周期根节点。

## Example

```ts
import { Earth } from '@vrsim/earth-engine-ol';

const earth = new Earth({ target: 'map' });
```

## Constructors

### Constructor

> **new Earth**(`options?`): `Earth`

Defined in: [src/facade/Earth.ts:100](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L100)

创建一个由调用方自行管理的地图实例。

通过构造器创建的实例不会注册到 `useEarth`。

#### Parameters

##### options?

[`EarthOptions`](../interfaces/EarthOptions.md) = `{}`

地图容器、View 和默认控件配置。

#### Returns

`Earth`

#### Example

```ts
import { Earth } from '@vrsim/earth-engine-ol';

const earth = new Earth({
  target: 'map',
  view: { center: [0, 0], zoom: 4 }
});
```

## Properties

### animations

> `readonly` **animations**: [`AnimationManager`](../interfaces/AnimationManager.md)

Defined in: [src/facade/Earth.ts:60](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L60)

播放和管理 Element 动画。

***

### contextMenu

> `readonly` **contextMenu**: [`ContextMenuService`](../interfaces/ContextMenuService.md)

Defined in: [src/facade/Earth.ts:70](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L70)

注册和控制地图右键菜单。

***

### controls

> `readonly` **controls**: [`ControlService`](../interfaces/ControlService.md)

Defined in: [src/facade/Earth.ts:76](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L76)

管理经纬网和比例尺。

***

### draw

> `readonly` **draw**: [`DrawService`](../interfaces/DrawService.md)

Defined in: [src/facade/Earth.ts:62](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L62)

绘制图形并启动 Edit Session。

***

### elements

> `readonly` **elements**: [`ElementService`](../interfaces/ElementService.md)

Defined in: [src/facade/Earth.ts:54](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L54)

创建、查询和批量操作 Element。

***

### events

> `readonly` **events**: [`EventService`](../interfaces/EventService.md)

Defined in: [src/facade/Earth.ts:68](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L68)

订阅当前地图的指针和键盘事件。

***

### layers

> `readonly` **layers**: [`LayerService`](../interfaces/LayerService.md)

Defined in: [src/facade/Earth.ts:56](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L56)

创建、查询和管理图层。

***

### map

> `readonly` **map**: `Map`

Defined in: [src/facade/Earth.ts:50](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L50)

供高级互操作使用的 OpenLayers Map。

***

### measure

> `readonly` **measure**: [`MeasureService`](../interfaces/MeasureService.md)

Defined in: [src/facade/Earth.ts:66](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L66)

距离和面积测量。

***

### overlays

> `readonly` **overlays**: [`OverlayService`](../interfaces/OverlayService.md)

Defined in: [src/facade/Earth.ts:72](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L72)

管理 Overlay 和 Descriptor。

***

### styles

> `readonly` **styles**: [`StyleService`](../interfaces/StyleService.md)

Defined in: [src/facade/Earth.ts:58](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L58)

设置和更新 Element 样式。

***

### target

> `readonly` **target**: `string` \| `HTMLElement`

Defined in: [src/facade/Earth.ts:52](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L52)

创建实例时确定的容器 ID 或容器元素。

***

### transform

> `readonly` **transform**: [`TransformService`](../interfaces/TransformService.md)

Defined in: [src/facade/Earth.ts:64](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L64)

平移、旋转、缩放和编辑 Element。

***

### view

> `readonly` **view**: [`ViewService`](../interfaces/ViewService.md)

Defined in: [src/facade/Earth.ts:74](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L74)

定位、缩放、坐标换算和光标控制。

## Accessors

### isDestroyed

#### Get Signature

> **get** **isDestroyed**(): `boolean`

Defined in: [src/facade/Earth.ts:125](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L125)

生命周期进入 `destroyed` 后为 `true`。

##### Returns

`boolean`

***

### lifecycle

#### Get Signature

> **get** **lifecycle**(): [`EarthLifecycleState`](../type-aliases/EarthLifecycleState.md)

Defined in: [src/facade/Earth.ts:120](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L120)

当前生命周期阶段。

##### Returns

[`EarthLifecycleState`](../type-aliases/EarthLifecycleState.md)

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [src/facade/Earth.ts:141](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L141)

销毁地图和全部服务。

重复调用不会产生额外操作。

#### Returns

`void`

#### Example

```ts
const earth = useEarth('planning');
earth.destroy();
```
