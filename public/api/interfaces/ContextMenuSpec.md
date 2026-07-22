[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ContextMenuSpec

# Interface: ContextMenuSpec

Defined in: [src/facade/ContextMenuFacade.ts:50](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L50)

一组右键菜单项目及其回调配置。

## Properties

### before?

> `readonly` `optional` **before?**: (`context`) => `boolean`

Defined in: [src/facade/ContextMenuFacade.ts:54](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L54)

显示前判断；仅返回 `true` 时项目可用，其他返回值或异常会保留项目但将其禁用。

#### Parameters

##### context

[`ContextMenuItemContext`](ContextMenuItemContext.md)

#### Returns

`boolean`

***

### items

> `readonly` **items**: readonly [`ContextMenuItemSpec`](ContextMenuItemSpec.md)[]

Defined in: [src/facade/ContextMenuFacade.ts:52](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L52)

当前目标可展示的菜单树。

***

### onSelect?

> `readonly` `optional` **onSelect?**: (`context`) => `void`

Defined in: [src/facade/ContextMenuFacade.ts:56](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L56)

用户选择可用菜单项目后调用。

#### Parameters

##### context

[`ContextMenuItemContext`](ContextMenuItemContext.md)

#### Returns

`void`
