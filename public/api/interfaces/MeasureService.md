[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / MeasureService

# Interface: MeasureService

Defined in: [src/facade/measureTypes.ts:152](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L152)

距离与面积测量的公开服务。

## Methods

### clear()

> **clear**(): `void`

Defined in: [src/facade/measureTypes.ts:180](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L180)

清除测量服务创建的全部图形和提示。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.measure.clear();
```

***

### start()

> **start**(`options`): [`MeasureSession`](MeasureSession.md)

Defined in: [src/facade/measureTypes.ts:167](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/measureTypes.ts#L167)

启动 Measure Session。

#### Parameters

##### options

[`MeasureOptions`](MeasureOptions.md)

测量类型、样式、单位和交互冲突策略。

#### Returns

[`MeasureSession`](MeasureSession.md)

已打开且处于活动状态的 Measure Session。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const session = earth.measure.start({ type: 'area', unit: 'km²' });
```
