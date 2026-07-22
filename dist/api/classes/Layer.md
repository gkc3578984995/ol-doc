[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / Layer

# Class: Layer

Defined in: [src/facade/Layer.ts:33](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L33)

地图 Layer 的实时句柄，可读取状态、提交更新或移除图层。

Layer 由 `earth.layers` 返回，请不要手动创建。

## Example

```ts
const layer = earth.layers.get('business');
layer?.hide();
```

## Constructors

### Constructor

> **new Layer**(): `Layer`

Defined in: [src/facade/Layer.ts:44](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L44)

创建 Layer 句柄。

该构造器只供引擎内部使用，外部应通过 `earth.layers` 获取图层。

#### Returns

`Layer`

#### Example

```ts
const layer = earth.layers.add({ kind: 'vector', id: 'business' });
```

## Accessors

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [src/facade/Layer.ts:52](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L52)

当前 Layer 的唯一 ID。

##### Returns

`string`

***

### kind

#### Get Signature

> **get** **kind**(): [`LayerKind`](../type-aliases/LayerKind.md)

Defined in: [src/facade/Layer.ts:63](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L63)

图层类型：矢量、瓦片或原生图层。

##### Returns

[`LayerKind`](../type-aliases/LayerKind.md)

***

### olLayer

#### Get Signature

> **get** **olLayer**(): `BaseLayer`

Defined in: [src/facade/Layer.ts:83](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L83)

供高级 OpenLayers 互操作使用的原生图层。

##### Returns

`BaseLayer`

***

### opacity

#### Get Signature

> **get** **opacity**(): `number`

Defined in: [src/facade/Layer.ts:73](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L73)

图层透明度，取值范围为 0 到 1。

##### Returns

`number`

***

### state

#### Get Signature

> **get** **state**(): `Readonly`\<[`LayerState`](../type-aliases/LayerState.md)\>

Defined in: [src/facade/Layer.ts:57](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L57)

当前不可变状态快照。

##### Returns

`Readonly`\<[`LayerState`](../type-aliases/LayerState.md)\>

***

### visible

#### Get Signature

> **get** **visible**(): `boolean`

Defined in: [src/facade/Layer.ts:68](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L68)

当前图层是否可见。

##### Returns

`boolean`

***

### zIndex

#### Get Signature

> **get** **zIndex**(): `number` \| `undefined`

Defined in: [src/facade/Layer.ts:78](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L78)

图层层级；数值越大越靠上。

##### Returns

`number` \| `undefined`

## Methods

### hide()

> **hide**(): `void`

Defined in: [src/facade/Layer.ts:123](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L123)

隐藏图层。

#### Returns

`void`

#### Example

```ts
layer.hide();
```

***

### remove()

> **remove**(): `void`

Defined in: [src/facade/Layer.ts:136](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L136)

从所属 Earth 中移除当前图层。

#### Returns

`void`

#### Example

```ts
layer.remove();
```

***

### show()

> **show**(): `void`

Defined in: [src/facade/Layer.ts:110](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L110)

显示图层。

#### Returns

`void`

#### Example

```ts
layer.show();
```

***

### update()

> **update**(`patch`): `void`

Defined in: [src/facade/Layer.ts:97](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Layer.ts#L97)

更新图层状态。

#### Parameters

##### patch

[`LayerPatch`](../interfaces/LayerPatch.md)

需要修改的状态字段。

#### Returns

`void`

#### Example

```ts
layer.update({ opacity: 0.6, zIndex: 20 });
```
