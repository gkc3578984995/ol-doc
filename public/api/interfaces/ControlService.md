[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ControlService

# Interface: ControlService

Defined in: [src/facade/ControlService.ts:13](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ControlService.ts#L13)

管理经纬网和比例尺的公开服务。

## Properties

### graticule

> `readonly` **graticule**: `Graticule` \| `undefined`

Defined in: [src/facade/ControlService.ts:15](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ControlService.ts#L15)

经纬网。未启用时为 `undefined`。

***

### scaleLine

> `readonly` **scaleLine**: `ScaleLine` \| `undefined`

Defined in: [src/facade/ControlService.ts:17](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ControlService.ts#L17)

比例尺。未启用时为 `undefined`。

## Methods

### disableGraticule()

> **disableGraticule**(): `void`

Defined in: [src/facade/ControlService.ts:41](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ControlService.ts#L41)

关闭经纬网。

#### Returns

`void`

#### Example

```ts
earth.controls.disableGraticule();
```

***

### disableScaleLine()

> **disableScaleLine**(): `void`

Defined in: [src/facade/ControlService.ts:65](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ControlService.ts#L65)

关闭比例尺。

#### Returns

`void`

#### Example

```ts
earth.controls.disableScaleLine();
```

***

### enableGraticule()

> **enableGraticule**(`options?`): `Graticule`

Defined in: [src/facade/ControlService.ts:31](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ControlService.ts#L31)

启用经纬网。

再次调用会先移除旧经纬网，再使用新配置创建。

#### Parameters

##### options?

`Options`

线样式、标签和层级等 Graticule 选项。

#### Returns

`Graticule`

新创建的 OpenLayers 经纬网图层。

#### Example

```ts
const graticule = earth.controls.enableGraticule({ showLabels: true });
```

***

### enableScaleLine()

> **enableScaleLine**(`options?`): `ScaleLine`

Defined in: [src/facade/ControlService.ts:55](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ControlService.ts#L55)

启用比例尺。

再次调用会先移除旧比例尺，再使用新配置创建。

#### Parameters

##### options?

`Options`

单位、样式和最小宽度等 ScaleLine 选项。

#### Returns

`ScaleLine`

新创建的 OpenLayers 比例尺控件。

#### Example

```ts
const scaleLine = earth.controls.enableScaleLine({ units: 'metric' });
```
