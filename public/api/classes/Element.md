[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / Element

# Class: Element\<T\>

Defined in: [src/facade/Element.ts:37](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Element.ts#L37)

地图 Element 的实时句柄，可读取状态、提交更新或移除对象。

Element 由 `earth.elements` 等服务返回，请不要手动创建。

## Example

```ts
const element = earth.elements.get('vehicle-1');
element?.update({ visible: false });
```

## Type Parameters

### T

`T` = `unknown`

`state.data` 中保存的业务数据类型。

## Constructors

### Constructor

> **new Element**\<`T`\>(): `Element`\<`T`\>

Defined in: [src/facade/Element.ts:50](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Element.ts#L50)

创建 Element 句柄。

该构造器只供引擎内部使用，外部应通过 `earth.elements` 获取 Element。

#### Returns

`Element`\<`T`\>

#### Example

```ts
const element = earth.elements.add({
  geometry: { type: 'point', controlPoints: [[0, 0]] }
});
```

## Accessors

### geometryDetails

#### Get Signature

> **get** **geometryDetails**(): `Readonly`\<[`ElementGeometryDetails`](../interfaces/ElementGeometryDetails.md)\>

Defined in: [src/facade/Element.ts:74](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Element.ts#L74)

最新已提交 Shape 状态解析出的完整静态渲染几何、地图坐标范围和统一控制参数。

详情同时提供范围角点、最终轮廓点和规范控制点。Circle 通过圆心、米制半径和当前 View 投影半径精确表达，不生成离散圆周点。结果不包含动画帧、交互预览、样式外扩或 world-wrap 展示副本。

##### Throws

`ObjectDisposedError` 当前句柄已被移除或已由同 ID 的新代次替代。

##### Returns

`Readonly`\<[`ElementGeometryDetails`](../interfaces/ElementGeometryDetails.md)\>

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [src/facade/Element.ts:58](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Element.ts#L58)

当前 Element 的唯一 ID。

##### Returns

`string`

***

### olFeature

#### Get Signature

> **get** **olFeature**(): `Feature`\<`Geometry`\>

Defined in: [src/facade/Element.ts:79](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Element.ts#L79)

OpenLayers 渲染 Feature。直接修改不会回写 Element 状态，并可能在下次投影时被覆盖。

##### Returns

`Feature`\<`Geometry`\>

***

### state

#### Get Signature

> **get** **state**(): `Readonly`\<[`ElementState`](../interfaces/ElementState.md)\<`T`\>\>

Defined in: [src/facade/Element.ts:63](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Element.ts#L63)

Element 当前的不可变状态快照。

##### Returns

`Readonly`\<[`ElementState`](../interfaces/ElementState.md)\<`T`\>\>

## Methods

### remove()

> **remove**(): `void`

Defined in: [src/facade/Element.ts:106](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Element.ts#L106)

从所属 Earth 中移除当前 Element。

#### Returns

`void`

#### Example

```ts
element.remove();
```

***

### update()

> **update**(`patch`): `void`

Defined in: [src/facade/Element.ts:93](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Element.ts#L93)

更新 Element 状态。

#### Parameters

##### patch

[`ElementPatch`](../type-aliases/ElementPatch.md)\<`T`\>

需要修改的状态字段。

#### Returns

`void`

#### Example

```ts
element.update({ visible: false, module: 'archived' });
```
