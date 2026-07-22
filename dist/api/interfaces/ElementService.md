[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ElementService

# Interface: ElementService

Defined in: [src/facade/types.ts:225](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L225)

创建、查询和批量操作当前 Earth 中 Element 的公开服务。

## Methods

### add()

> **add**\<`T`\>(`input`): [`Element`](../classes/Element.md)\<`T`\>

Defined in: [src/facade/types.ts:240](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L240)

创建 Element。

#### Type Parameters

##### T

`T`

Element 保存的业务数据类型。

#### Parameters

##### input

[`ElementCreateInput`](ElementCreateInput.md)\<`T`\>

几何、样式、分组和业务数据。

#### Returns

[`Element`](../classes/Element.md)\<`T`\>

新创建的 Element 句柄。

#### Example

```ts
const element = earth.elements.add({
  geometry: { type: 'point', controlPoints: [[0, 0]] }
});
```

***

### atPixel()

> **atPixel**\<`T`\>(`pixel`): [`ElementHit`](../type-aliases/ElementHit.md)\<`T`\> \| `undefined`

Defined in: [src/facade/types.ts:353](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L353)

获取屏幕像素位置上的 Element。

#### Type Parameters

##### T

`T` = `unknown`

命中 Element 保存的业务数据类型。

#### Parameters

##### pixel

[`Pixel`](../type-aliases/Pixel.md)

以地图视口左上角为原点的屏幕坐标。

#### Returns

[`ElementHit`](../type-aliases/ElementHit.md)\<`T`\> \| `undefined`

命中时返回 Element 和图层，否则返回 `undefined`。

#### Example

```ts
const hit = earth.elements.atPixel([120, 80]);
```

***

### clear()

> **clear**(): `void`

Defined in: [src/facade/types.ts:340](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L340)

清空全部 Element。

#### Returns

`void`

#### Example

```ts
earth.elements.clear();
```

***

### copy()

> **copy**\<`T`\>(`id`, `overrides?`): [`Element`](../classes/Element.md)\<`T`\>

Defined in: [src/facade/types.ts:330](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L330)

复制 Element。

#### Type Parameters

##### T

`T`

Element 保存的业务数据类型。

#### Parameters

##### id

`string`

待复制的 Element ID。

##### overrides?

`Partial`\<`Omit`\<[`ElementState`](ElementState.md)\<`T`\>, `"type"` \| `"id"` \| `"geometry"`\> & `object`\>

对副本几何、分组、样式或数据的覆盖值。

#### Returns

[`Element`](../classes/Element.md)\<`T`\>

新创建的 Element 副本。

#### Example

```ts
const copy = earth.elements.copy('vehicle-1', { module: 'vehicle-copies' });
```

***

### get()

> **get**\<`T`\>(`id`): [`Element`](../classes/Element.md)\<`T`\> \| `undefined`

Defined in: [src/facade/types.ts:253](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L253)

按 ID 获取 Element。

#### Type Parameters

##### T

`T`

Element 保存的业务数据类型。

#### Parameters

##### id

`string`

要查找的唯一 Element ID。

#### Returns

[`Element`](../classes/Element.md)\<`T`\> \| `undefined`

找到时返回 Element 句柄，否则返回 `undefined`。

#### Example

```ts
const element = earth.elements.get('vehicle-1');
```

***

### getScreenExtent()

> **getScreenExtent**(`target`): [`ScreenExtent`](../type-aliases/ScreenExtent.md) \| `undefined`

Defined in: [src/facade/types.ts:365](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L365)

获取 Element 的屏幕范围。

#### Parameters

##### target

`string` \| [`Element`](../classes/Element.md)\<`unknown`\>

Element ID 或句柄。

#### Returns

[`ScreenExtent`](../type-aliases/ScreenExtent.md) \| `undefined`

可见目标的屏幕范围，否则返回 `undefined`。

#### Example

```ts
const extent = earth.elements.getScreenExtent('vehicle-1');
```

***

### hide()

> **hide**(`selector`): readonly [`Element`](../classes/Element.md)\<`unknown`\>[]

Defined in: [src/facade/types.ts:304](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L304)

批量隐藏 Element。

#### Parameters

##### selector

[`ElementSelector`](ElementSelector.md)

待隐藏 Element 的查询条件。

#### Returns

readonly [`Element`](../classes/Element.md)\<`unknown`\>[]

实际隐藏的 Element 列表。

#### Example

```ts
earth.elements.hide({ layerId: 'business' });
```

***

### query()

> **query**\<`T`\>(`selector?`): readonly [`Element`](../classes/Element.md)\<`T`\>[]

Defined in: [src/facade/types.ts:266](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L266)

查询 Element。

#### Type Parameters

##### T

`T`

Element 保存的业务数据类型。

#### Parameters

##### selector?

[`ElementSelector`](ElementSelector.md)\<`T`\>

查询条件；省略时返回全部 Element。

#### Returns

readonly [`Element`](../classes/Element.md)\<`T`\>[]

符合条件的 Element 列表。

#### Example

```ts
const vehicles = earth.elements.query({ module: 'vehicles' });
```

***

### remove()

> **remove**(`selector`): `number`

Defined in: [src/facade/types.ts:292](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L292)

批量移除 Element。

#### Parameters

##### selector

[`ElementSelector`](ElementSelector.md)

待移除 Element 的查询条件。

#### Returns

`number`

实际移除的 Element 数量。

#### Example

```ts
const count = earth.elements.remove({ module: 'vehicles' });
```

***

### show()

> **show**(`selector`): readonly [`Element`](../classes/Element.md)\<`unknown`\>[]

Defined in: [src/facade/types.ts:316](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L316)

批量显示 Element。

#### Parameters

##### selector

[`ElementSelector`](ElementSelector.md)

待显示 Element 的查询条件。

#### Returns

readonly [`Element`](../classes/Element.md)\<`unknown`\>[]

实际显示的 Element 列表。

#### Example

```ts
earth.elements.show({ module: 'vehicles' });
```

***

### update()

> **update**\<`T`\>(`selector`, `patch`): readonly [`Element`](../classes/Element.md)\<`T`\>[]

Defined in: [src/facade/types.ts:280](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/types.ts#L280)

批量更新 Element。

#### Type Parameters

##### T

`T`

Element 保存的业务数据类型。

#### Parameters

##### selector

[`ElementSelector`](ElementSelector.md)\<`T`\>

待更新 Element 的查询条件。

##### patch

[`ElementPatch`](../type-aliases/ElementPatch.md)\<`T`\>

需要修改的状态字段。

#### Returns

readonly [`Element`](../classes/Element.md)\<`T`\>[]

实际更新的 Element 列表。

#### Example

```ts
const updated = earth.elements.update({ module: 'vehicles' }, { visible: false });
```
