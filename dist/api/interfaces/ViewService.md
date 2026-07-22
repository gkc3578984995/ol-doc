[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ViewService

# Interface: ViewService

Defined in: [src/facade/ViewService.ts:39](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L39)

控制地图 View、光标、拖拽和世界坐标的公开服务。

## Properties

### olView

> `readonly` **olView**: `View`

Defined in: [src/facade/ViewService.ts:41](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L41)

供高级 OpenLayers 互操作使用的原生 View。

## Methods

### animateFlyTo()

> **animateFlyTo**(`center`, `options?`): `void`

Defined in: [src/facade/ViewService.ts:108](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L108)

以动画飞行到指定中心点。

#### Parameters

##### center

[`Coordinate`](../type-aliases/Coordinate.md)

当前 View 投影下的目标中心点。

##### options?

[`FlyToOptions`](FlyToOptions.md)

目标缩放级别、动画时长、缓动函数和完成回调。

#### Returns

`void`

#### Example

```ts
earth.view.animateFlyTo([12956817, 4851819], { zoom: 10, duration: 1200 });
```

***

### coordinateAtPixel()

> **coordinateAtPixel**(`pixel`): [`Coordinate`](../type-aliases/Coordinate.md) \| `undefined`

Defined in: [src/facade/ViewService.ts:350](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L350)

将屏幕坐标转换为地图坐标。

#### Parameters

##### pixel

[`Pixel`](../type-aliases/Pixel.md)

以地图视口左上角为原点的屏幕坐标。

#### Returns

[`Coordinate`](../type-aliases/Coordinate.md) \| `undefined`

对应的地图坐标。无法换算时返回 `undefined`。

#### Example

```ts
const coordinate = earth.view.coordinateAtPixel([120, 80]);
```

***

### flyHome()

> **flyHome**(`options?`): `void`

Defined in: [src/facade/ViewService.ts:96](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L96)

以动画返回初始中心点。

#### Parameters

##### options?

[`ViewAnimationOptions`](ViewAnimationOptions.md)

动画时长、缓动函数和完成回调。

#### Returns

`void`

#### Example

```ts
earth.view.flyHome({ duration: 800 });
```

***

### flyTo()

> **flyTo**(`center`, `zoom?`): `void`

Defined in: [src/facade/ViewService.ts:120](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L120)

立即定位到指定中心点。

#### Parameters

##### center

[`Coordinate`](../type-aliases/Coordinate.md)

当前 View 投影下的目标中心点。

##### zoom?

`number`

目标缩放级别；省略时保留当前值。

#### Returns

`void`

#### Example

```ts
earth.view.flyTo([12956817, 4851819], 10);
```

***

### getCenter()

> **getCenter**(): [`Coordinate`](../type-aliases/Coordinate.md) \| `undefined`

Defined in: [src/facade/ViewService.ts:52](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L52)

获取当前中心点。

#### Returns

[`Coordinate`](../type-aliases/Coordinate.md) \| `undefined`

当前中心点；View 尚未初始化时返回 `undefined`。

#### Example

```ts
const center = earth.view.getCenter();
```

***

### getZoom()

> **getZoom**(): `number` \| `undefined`

Defined in: [src/facade/ViewService.ts:74](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L74)

获取当前缩放级别。

#### Returns

`number` \| `undefined`

当前缩放级别；View 尚未初始化时返回 `undefined`。

#### Example

```ts
const zoom = earth.view.getZoom();
```

***

### normalizeToViewWorld()

#### Call Signature

> **normalizeToViewWorld**(`coordinates`): [`Coordinate`](../type-aliases/Coordinate.md)

Defined in: [src/facade/ViewService.ts:275](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L275)

将单个坐标移动到当前视图所在的世界副本。

##### Parameters

###### coordinates

[`Coordinate`](../type-aliases/Coordinate.md)

待归一化的投影坐标。

##### Returns

[`Coordinate`](../type-aliases/Coordinate.md)

归一化后的新坐标。

##### Example

```ts
const point = earth.view.normalizeToViewWorld([0, 0]);
```

#### Call Signature

> **normalizeToViewWorld**(`coordinates`): readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

Defined in: [src/facade/ViewService.ts:287](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L287)

将一组坐标移动到当前视图所在的世界副本。

##### Parameters

###### coordinates

readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

待归一化的一组投影坐标。

##### Returns

readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

归一化后的新坐标列表。

##### Example

```ts
const line = earth.view.normalizeToViewWorld([[0, 0], [10, 10]]);
```

#### Call Signature

> **normalizeToViewWorld**(`coordinates`): readonly readonly [`Coordinate`](../type-aliases/Coordinate.md)[][]

Defined in: [src/facade/ViewService.ts:299](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L299)

将多组坐标移动到当前视图所在的世界副本。

##### Parameters

###### coordinates

readonly readonly [`Coordinate`](../type-aliases/Coordinate.md)[][]

待归一化的多组投影坐标。

##### Returns

readonly readonly [`Coordinate`](../type-aliases/Coordinate.md)[][]

归一化后的新坐标组。

##### Example

```ts
const rings = earth.view.normalizeToViewWorld([[[0, 0], [10, 0], [0, 0]]]);
```

***

### restoreToWorld()

#### Call Signature

> **restoreToWorld**(`coordinates`, `index`): [`Coordinate`](../type-aliases/Coordinate.md)

Defined in: [src/facade/ViewService.ts:312](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L312)

将单个坐标恢复到指定世界副本。

##### Parameters

###### coordinates

[`Coordinate`](../type-aliases/Coordinate.md)

待恢复的投影坐标。

###### index

`number` \| `undefined`

目标世界副本索引；传 `undefined` 时只复制坐标。

##### Returns

[`Coordinate`](../type-aliases/Coordinate.md)

恢复后的新坐标。

##### Example

```ts
const point = earth.view.restoreToWorld([0, 0], 1);
```

#### Call Signature

> **restoreToWorld**(`coordinates`, `index`): readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

Defined in: [src/facade/ViewService.ts:325](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L325)

将一组坐标恢复到指定世界副本。

##### Parameters

###### coordinates

readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

待恢复的一组投影坐标。

###### index

`number` \| `undefined`

目标世界副本索引；传 `undefined` 时只复制坐标。

##### Returns

readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

恢复后的新坐标列表。

##### Example

```ts
const line = earth.view.restoreToWorld([[0, 0], [10, 10]], 1);
```

#### Call Signature

> **restoreToWorld**(`coordinates`, `index`): readonly readonly [`Coordinate`](../type-aliases/Coordinate.md)[][]

Defined in: [src/facade/ViewService.ts:338](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L338)

将多组坐标恢复到指定世界副本。

##### Parameters

###### coordinates

readonly readonly [`Coordinate`](../type-aliases/Coordinate.md)[][]

待恢复的多组投影坐标。

###### index

`number` \| `undefined`

目标世界副本索引；传 `undefined` 时只复制坐标。

##### Returns

readonly readonly [`Coordinate`](../type-aliases/Coordinate.md)[][]

恢复后的新坐标组。

##### Example

```ts
const rings = earth.view.restoreToWorld([[[0, 0], [10, 0], [0, 0]]], 1);
```

***

### setCenter()

> **setCenter**(`center`): `void`

Defined in: [src/facade/ViewService.ts:63](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L63)

设置当前中心点。

#### Parameters

##### center

[`Coordinate`](../type-aliases/Coordinate.md)

当前 View 投影下的中心点。

#### Returns

`void`

#### Example

```ts
earth.view.setCenter([12956817, 4851819]);
```

***

### setCursor()

> **setCursor**(`cursor`): `void`

Defined in: [src/facade/ViewService.ts:209](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L209)

设置地图光标。

#### Parameters

##### cursor

`string`

有效的 CSS cursor 值。

#### Returns

`void`

#### Example

```ts
earth.view.setCursor('pointer');
```

***

### setDragEnabled()

> **setDragEnabled**(`enabled`): `void`

Defined in: [src/facade/ViewService.ts:240](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L240)

开启或关闭地图拖拽。

#### Parameters

##### enabled

`boolean`

`true` 允许拖拽，`false` 禁止拖拽。

#### Returns

`void`

#### Example

```ts
earth.view.setDragEnabled(false);
```

***

### setZoom()

> **setZoom**(`zoom`): `void`

Defined in: [src/facade/ViewService.ts:85](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L85)

设置当前缩放级别。

#### Parameters

##### zoom

`number`

新的缩放级别；数值越大视图越近。

#### Returns

`void`

#### Example

```ts
earth.view.setZoom(8);
```

***

### toGeographicCoordinates()

#### Call Signature

> **toGeographicCoordinates**(`coordinates`): readonly \[`number`, `number`\]

Defined in: [src/facade/ViewService.ts:173](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L173)

将单个二维投影坐标转换为经纬度坐标。

##### Parameters

###### coordinates

readonly \[`number`, `number`\]

当前 View 投影下的坐标。

##### Returns

readonly \[`number`, `number`\]

新的 EPSG:4326 坐标，经度在前、纬度在后。

##### Example

```ts
const center = earth.view.toGeographicCoordinates(element.state.geometry.center);
```

#### Call Signature

> **toGeographicCoordinates**(`coordinates`): readonly `number`[]

Defined in: [src/facade/ViewService.ts:186](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L186)

将当前 View 的投影坐标转换为经纬度坐标。

##### Parameters

###### coordinates

readonly `number`[]

当前 View 投影下的坐标；扁平数组每两个数字为一组，嵌套数组每项可为二维或三维坐标。

##### Returns

readonly `number`[]

新的 EPSG:4326 坐标；结构与输入一致，三维坐标的第三项保持不变。

##### Example

```ts
const geographic = earth.view.toGeographicCoordinates(projected);
const geographicWithHeight = earth.view.toGeographicCoordinates(projectedWithHeight);
```

#### Call Signature

> **toGeographicCoordinates**(`coordinates`): readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

Defined in: [src/facade/ViewService.ts:198](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L198)

将嵌套投影坐标转换为经纬度坐标。

##### Parameters

###### coordinates

readonly readonly `number`[][]

当前 View 投影下的坐标，每项可为二维或三维坐标。

##### Returns

readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

新的 EPSG:4326 坐标；三维坐标的第三项保持不变。

##### Example

```ts
const geographic = earth.view.toGeographicCoordinates(projected);
```

***

### toProjectedCoordinates()

#### Call Signature

> **toProjectedCoordinates**(`coordinates`): readonly \[`number`, `number`\]

Defined in: [src/facade/ViewService.ts:133](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L133)

将单个二维经纬度坐标转换为当前 View 的投影坐标。

##### Parameters

###### coordinates

readonly \[`number`, `number`\]

EPSG:4326 坐标，经度在前、纬度在后。

##### Returns

readonly \[`number`, `number`\]

当前 View 投影下的新坐标。

##### Example

```ts
const center = earth.view.toProjectedCoordinates([120, 0]);
earth.elements.add({ geometry: { type: 'circle', center, radius: 1_000 } });
```

#### Call Signature

> **toProjectedCoordinates**(`coordinates`): readonly `number`[]

Defined in: [src/facade/ViewService.ts:146](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L146)

将经纬度坐标转换为当前 View 的投影坐标。

##### Parameters

###### coordinates

readonly `number`[]

EPSG:4326 坐标；扁平数组每两个数字为一组经纬度，嵌套数组每项可为二维或三维坐标。

##### Returns

readonly `number`[]

当前 View 投影下的新坐标；结构与输入一致，三维坐标的第三项保持不变。

##### Example

```ts
const projected = earth.view.toProjectedCoordinates([120, 0, 110, 0]);
const projectedWithHeight = earth.view.toProjectedCoordinates([[120, 0, 500]]);
```

#### Call Signature

> **toProjectedCoordinates**(`coordinates`): readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

Defined in: [src/facade/ViewService.ts:161](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L161)

将嵌套经纬度坐标转换为当前 View 的投影坐标。

##### Parameters

###### coordinates

readonly readonly `number`[][]

EPSG:4326 坐标，每项可为二维或三维坐标。

##### Returns

readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

当前 View 投影下的新坐标；三维坐标的第三项保持不变。

##### Example

```ts
const projected = earth.view.toProjectedCoordinates([
  [120, 0],
  [110, 0, 500]
]);
```

***

### translateCoordinatesToPixel()

#### Call Signature

> **translateCoordinatesToPixel**(`pixel`, `coordinates`): [`Coordinate`](../type-aliases/Coordinate.md) \| `undefined`

Defined in: [src/facade/ViewService.ts:363](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L363)

平移单个坐标，使其中心落到指定屏幕位置。

##### Parameters

###### pixel

[`Pixel`](../type-aliases/Pixel.md)

目标屏幕位置。

###### coordinates

[`Coordinate`](../type-aliases/Coordinate.md)

待平移的投影坐标。

##### Returns

[`Coordinate`](../type-aliases/Coordinate.md) \| `undefined`

平移后的新坐标。无法换算时返回 `undefined`。

##### Example

```ts
const point = earth.view.translateCoordinatesToPixel([120, 80], [0, 0]);
```

#### Call Signature

> **translateCoordinatesToPixel**(`pixel`, `coordinates`): readonly [`Coordinate`](../type-aliases/Coordinate.md)[] \| `undefined`

Defined in: [src/facade/ViewService.ts:376](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L376)

平移一组坐标，使其中心落到指定屏幕位置。

##### Parameters

###### pixel

[`Pixel`](../type-aliases/Pixel.md)

目标屏幕位置。

###### coordinates

readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

待平移的一组投影坐标。

##### Returns

readonly [`Coordinate`](../type-aliases/Coordinate.md)[] \| `undefined`

平移后的新坐标列表。无法换算时返回 `undefined`。

##### Example

```ts
const line = earth.view.translateCoordinatesToPixel([120, 80], [[0, 0], [10, 10]]);
```

#### Call Signature

> **translateCoordinatesToPixel**(`pixel`, `coordinates`): readonly readonly [`Coordinate`](../type-aliases/Coordinate.md)[][] \| `undefined`

Defined in: [src/facade/ViewService.ts:389](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L389)

平移多组坐标，使其中心落到指定屏幕位置。

##### Parameters

###### pixel

[`Pixel`](../type-aliases/Pixel.md)

目标屏幕位置。

###### coordinates

readonly readonly [`Coordinate`](../type-aliases/Coordinate.md)[][]

待平移的多组投影坐标。

##### Returns

readonly readonly [`Coordinate`](../type-aliases/Coordinate.md)[][] \| `undefined`

平移后的新坐标组。无法换算时返回 `undefined`。

##### Example

```ts
const rings = earth.view.translateCoordinatesToPixel([120, 80], [[[0, 0], [10, 0], [0, 0]]]);
```

***

### useCrosshairCursor()

> **useCrosshairCursor**(): `void`

Defined in: [src/facade/ViewService.ts:229](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L229)

使用十字光标。

#### Returns

`void`

#### Example

```ts
earth.view.useCrosshairCursor();
```

***

### useDefaultCursor()

> **useDefaultCursor**(): `void`

Defined in: [src/facade/ViewService.ts:219](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L219)

恢复默认光标。

#### Returns

`void`

#### Example

```ts
earth.view.useDefaultCursor();
```

***

### worldIndex()

> **worldIndex**(`x`): `number` \| `undefined`

Defined in: [src/facade/ViewService.ts:263](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L263)

获取横坐标所在的世界副本索引。

#### Parameters

##### x

`number`

当前投影下的 X 值。

#### Returns

`number` \| `undefined`

所在世界副本的索引；投影没有有限范围时返回 `undefined`。

#### Example

```ts
const index = earth.view.worldIndex(20037508.34);
```

***

### worldWidth()

> **worldWidth**(): `number` \| `undefined`

Defined in: [src/facade/ViewService.ts:251](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L251)

获取当前投影的世界宽度。

#### Returns

`number` \| `undefined`

当前投影的世界宽度；投影没有有限范围时返回 `undefined`。

#### Example

```ts
const width = earth.view.worldWidth();
```
