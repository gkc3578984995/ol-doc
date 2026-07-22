[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ContextMenuItemContext

# Interface: ContextMenuItemContext

Defined in: [src/facade/ContextMenuFacade.ts:32](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L32)

右键菜单回调接收的公共上下文。

## Properties

### coordinate

> `readonly` **coordinate**: [`Coordinate`](../type-aliases/Coordinate.md)

Defined in: [src/facade/ContextMenuFacade.ts:38](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L38)

右键位置的地图坐标快照。

***

### element?

> `readonly` `optional` **element?**: [`Element`](../classes/Element.md)\<`unknown`\>

Defined in: [src/facade/ContextMenuFacade.ts:42](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L42)

命中受管理 Element 时提供的实时句柄。

***

### item

> `readonly` **item**: [`ContextMenuItemSpec`](ContextMenuItemSpec.md)

Defined in: [src/facade/ContextMenuFacade.ts:34](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L34)

当前处理项目的只读配置。

***

### layer?

> `readonly` `optional` **layer?**: [`Layer`](../classes/Layer.md)

Defined in: [src/facade/ContextMenuFacade.ts:46](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L46)

命中 Element 所属的图层句柄。

***

### module?

> `readonly` `optional` **module?**: `string`

Defined in: [src/facade/ContextMenuFacade.ts:44](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L44)

命中 Element 携带的业务模块标识。

***

### pixel

> `readonly` **pixel**: [`Pixel`](../type-aliases/Pixel.md)

Defined in: [src/facade/ContextMenuFacade.ts:40](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L40)

右键位置相对地图视口的屏幕坐标。

***

### scope

> `readonly` **scope**: `"map"` \| `"module"` \| `"element"`

Defined in: [src/facade/ContextMenuFacade.ts:36](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L36)

菜单来自地图、业务模块还是 Element。
