[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / UseEarthOptions

# Interface: UseEarthOptions

Defined in: [src/facade/useEarth.ts:10](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/useEarth.ts#L10)

`useEarth` 的实例选择与创建配置。

## Extends

- [`EarthOptions`](EarthOptions.md)

## Properties

### controls?

> `readonly` `optional` **controls?**: `DefaultsOptions`

Defined in: [src/facade/Earth.ts:29](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L29)

OpenLayers 默认控件的开关配置。

#### Inherited from

[`EarthOptions`](EarthOptions.md).[`controls`](EarthOptions.md#controls)

***

### id?

> `readonly` `optional` **id?**: `string`

Defined in: [src/facade/useEarth.ts:12](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/useEarth.ts#L12)

命名实例的 ID；省略时选择默认实例。

***

### target?

> `readonly` `optional` **target?**: `string` \| `HTMLElement`

Defined in: [src/facade/Earth.ts:25](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L25)

地图容器 ID 或容器元素。

#### Inherited from

[`EarthOptions`](EarthOptions.md).[`target`](EarthOptions.md#target)

***

### view?

> `readonly` `optional` **view?**: `ViewOptions`

Defined in: [src/facade/Earth.ts:27](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/Earth.ts#L27)

中心点、缩放级别等 OpenLayers View 选项。

#### Inherited from

[`EarthOptions`](EarthOptions.md).[`view`](EarthOptions.md#view)
