[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / EarthPointerEvent

# Type Alias: EarthPointerEvent\<T\>

> **EarthPointerEvent**\<`T`\> = `object` & `T` *extends* `"pointermove"` ? `object` : `object`

Defined in: [src/facade/EventFacade.ts:20](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L20)

Earth 指针事件的公开载荷。

## Type Declaration

### coordinate

> `readonly` **coordinate**: [`Coordinate`](Coordinate.md)

事件位置的地图坐标快照。

### element?

> `readonly` `optional` **element?**: [`Element`](../classes/Element.md)

命中受管理 Element 时提供的实时句柄。

### layer?

> `readonly` `optional` **layer?**: [`Layer`](../classes/Layer.md)

命中 Element 所属的图层句柄。

### module?

> `readonly` `optional` **module?**: `string`

命中 Element 携带的业务模块标识。

### olFeature?

> `readonly` `optional` **olFeature?**: [`Element`](../classes/Element.md)\[`"olFeature"`\]

命中 Element 对应的 OpenLayers Feature。

### originalEvent

> `readonly` **originalEvent**: `Event`

只在当前同步回调期间有效的原始浏览器事件。

### pixel

> `readonly` **pixel**: [`Pixel`](Pixel.md)

事件位置相对地图视口的屏幕坐标。

### type

> `readonly` **type**: `T`

本次指针事件的名称。

## Type Parameters

### T

`T` *extends* `Exclude`\<[`EarthEventType`](EarthEventType.md), `"keydown"`\> = `Exclude`\<[`EarthEventType`](EarthEventType.md), `"keydown"`\>

当前指针事件的名称类型。
