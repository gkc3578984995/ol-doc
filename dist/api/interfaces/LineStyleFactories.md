[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / LineStyleFactories

# Interface: LineStyleFactories

Defined in: [src/builtins/styles/lineStyles.ts:166](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L166)

创建开放路径和 Polygon 闭合边界线饰的公共工厂。

## Methods

### polygon()

> **polygon**(`options?`): [`StyleSpec`](StyleSpec.md)

Defined in: [src/builtins/styles/lineStyles.ts:196](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L196)

创建只作用于 Polygon 外环的闭合边界线饰。

#### Parameters

##### options?

[`PolygonLineStyleOptions`](../type-aliases/PolygonLineStyleOptions.md)

选择边界轨道、统一颜色、装饰或路径文本。

#### Returns

[`StyleSpec`](StyleSpec.md)

可与现有 `fill` 组合的独立 `StyleSpec`。

#### Example

```ts
const style = {
  ...lineStyles.polygon({ lines: ['solid', 'dashed'], decoration: 'tick' }),
  fill: { type: 'solid', color: [255, 0, 0, 0.1] }
};
```

***

### polyline()

> **polyline**(`options?`): [`StyleSpec`](StyleSpec.md)

Defined in: [src/builtins/styles/lineStyles.ts:181](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/builtins/styles/lineStyles.ts#L181)

创建直线、折线或曲线使用的开放路径线饰。

#### Parameters

##### options?

[`PolylineLineStyleOptions`](../type-aliases/PolylineLineStyleOptions.md)

选择轨道、统一颜色、端帽、装饰或路径文本。

#### Returns

[`StyleSpec`](StyleSpec.md)

可直接传给 `elements.add()` 或 Draw 的独立 `StyleSpec`。

#### Example

```ts
const style = lineStyles.polyline({
  lines: 'dashed',
  caps: { start: 'bar', end: 'arrow' },
  decoration: 'circle'
});
```
