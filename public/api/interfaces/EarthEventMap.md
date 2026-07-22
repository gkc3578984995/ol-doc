[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / EarthEventMap

# Interface: EarthEventMap

Defined in: [src/facade/EventFacade.ts:65](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L65)

Earth 事件名称与公开载荷的映射。

## Properties

### click

> `readonly` **click**: `object`

Defined in: [src/facade/EventFacade.ts:69](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L69)

地图单击事件。

#### coordinate

> `readonly` **coordinate**: [`Coordinate`](../type-aliases/Coordinate.md)

事件位置的地图坐标快照。

#### element?

> `readonly` `optional` **element?**: [`Element`](../classes/Element.md)\<`unknown`\>

命中受管理 Element 时提供的实时句柄。

#### layer?

> `readonly` `optional` **layer?**: [`Layer`](../classes/Layer.md)

命中 Element 所属的图层句柄。

#### module?

> `readonly` `optional` **module?**: `string`

命中 Element 携带的业务模块标识。

#### olFeature?

> `readonly` `optional` **olFeature?**: `Feature`\<`Geometry`, \{\[`x`: `string`\]: `any`; \}\>

命中 Element 对应的 OpenLayers Feature。

#### originalEvent

> `readonly` **originalEvent**: `Event`

只在当前同步回调期间有效的原始浏览器事件。

#### pixel

> `readonly` **pixel**: [`Pixel`](../type-aliases/Pixel.md)

事件位置相对地图视口的屏幕坐标。

#### type

> `readonly` **type**: `"click"`

本次指针事件的名称。

***

### doubleclick

> `readonly` **doubleclick**: `object`

Defined in: [src/facade/EventFacade.ts:75](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L75)

地图双击事件。

#### coordinate

> `readonly` **coordinate**: [`Coordinate`](../type-aliases/Coordinate.md)

事件位置的地图坐标快照。

#### element?

> `readonly` `optional` **element?**: [`Element`](../classes/Element.md)\<`unknown`\>

命中受管理 Element 时提供的实时句柄。

#### layer?

> `readonly` `optional` **layer?**: [`Layer`](../classes/Layer.md)

命中 Element 所属的图层句柄。

#### module?

> `readonly` `optional` **module?**: `string`

命中 Element 携带的业务模块标识。

#### olFeature?

> `readonly` `optional` **olFeature?**: `Feature`\<`Geometry`, \{\[`x`: `string`\]: `any`; \}\>

命中 Element 对应的 OpenLayers Feature。

#### originalEvent

> `readonly` **originalEvent**: `Event`

只在当前同步回调期间有效的原始浏览器事件。

#### pixel

> `readonly` **pixel**: [`Pixel`](../type-aliases/Pixel.md)

事件位置相对地图视口的屏幕坐标。

#### type

> `readonly` **type**: `"doubleclick"`

本次指针事件的名称。

***

### keydown

> `readonly` **keydown**: [`EarthKeyboardEvent`](EarthKeyboardEvent.md)

Defined in: [src/facade/EventFacade.ts:79](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L79)

Earth 全局键盘事件。

***

### leftdown

> `readonly` **leftdown**: `object`

Defined in: [src/facade/EventFacade.ts:71](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L71)

鼠标主按钮按下事件。

#### coordinate

> `readonly` **coordinate**: [`Coordinate`](../type-aliases/Coordinate.md)

事件位置的地图坐标快照。

#### element?

> `readonly` `optional` **element?**: [`Element`](../classes/Element.md)\<`unknown`\>

命中受管理 Element 时提供的实时句柄。

#### layer?

> `readonly` `optional` **layer?**: [`Layer`](../classes/Layer.md)

命中 Element 所属的图层句柄。

#### module?

> `readonly` `optional` **module?**: `string`

命中 Element 携带的业务模块标识。

#### olFeature?

> `readonly` `optional` **olFeature?**: `Feature`\<`Geometry`, \{\[`x`: `string`\]: `any`; \}\>

命中 Element 对应的 OpenLayers Feature。

#### originalEvent

> `readonly` **originalEvent**: `Event`

只在当前同步回调期间有效的原始浏览器事件。

#### pixel

> `readonly` **pixel**: [`Pixel`](../type-aliases/Pixel.md)

事件位置相对地图视口的屏幕坐标。

#### type

> `readonly` **type**: `"leftdown"`

本次指针事件的名称。

***

### leftup

> `readonly` **leftup**: `object`

Defined in: [src/facade/EventFacade.ts:73](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L73)

鼠标主按钮抬起事件。

#### coordinate

> `readonly` **coordinate**: [`Coordinate`](../type-aliases/Coordinate.md)

事件位置的地图坐标快照。

#### element?

> `readonly` `optional` **element?**: [`Element`](../classes/Element.md)\<`unknown`\>

命中受管理 Element 时提供的实时句柄。

#### layer?

> `readonly` `optional` **layer?**: [`Layer`](../classes/Layer.md)

命中 Element 所属的图层句柄。

#### module?

> `readonly` `optional` **module?**: `string`

命中 Element 携带的业务模块标识。

#### olFeature?

> `readonly` `optional` **olFeature?**: `Feature`\<`Geometry`, \{\[`x`: `string`\]: `any`; \}\>

命中 Element 对应的 OpenLayers Feature。

#### originalEvent

> `readonly` **originalEvent**: `Event`

只在当前同步回调期间有效的原始浏览器事件。

#### pixel

> `readonly` **pixel**: [`Pixel`](../type-aliases/Pixel.md)

事件位置相对地图视口的屏幕坐标。

#### type

> `readonly` **type**: `"leftup"`

本次指针事件的名称。

***

### pointermove

> `readonly` **pointermove**: [`EarthPointerEvent`](../type-aliases/EarthPointerEvent.md)\<`"pointermove"`\>

Defined in: [src/facade/EventFacade.ts:67](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L67)

带进入、移动、离开阶段的指针移动事件。

***

### rightclick

> `readonly` **rightclick**: `object`

Defined in: [src/facade/EventFacade.ts:77](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L77)

地图右键事件。

#### coordinate

> `readonly` **coordinate**: [`Coordinate`](../type-aliases/Coordinate.md)

事件位置的地图坐标快照。

#### element?

> `readonly` `optional` **element?**: [`Element`](../classes/Element.md)\<`unknown`\>

命中受管理 Element 时提供的实时句柄。

#### layer?

> `readonly` `optional` **layer?**: [`Layer`](../classes/Layer.md)

命中 Element 所属的图层句柄。

#### module?

> `readonly` `optional` **module?**: `string`

命中 Element 携带的业务模块标识。

#### olFeature?

> `readonly` `optional` **olFeature?**: `Feature`\<`Geometry`, \{\[`x`: `string`\]: `any`; \}\>

命中 Element 对应的 OpenLayers Feature。

#### originalEvent

> `readonly` **originalEvent**: `Event`

只在当前同步回调期间有效的原始浏览器事件。

#### pixel

> `readonly` **pixel**: [`Pixel`](../type-aliases/Pixel.md)

事件位置相对地图视口的屏幕坐标。

#### type

> `readonly` **type**: `"rightclick"`

本次指针事件的名称。
