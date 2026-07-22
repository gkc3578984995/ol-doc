[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ContextMenuItemSpec

# Interface: ContextMenuItemSpec

Defined in: [src/facade/ContextMenuFacade.ts:16](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L16)

单个右键菜单项目的配置。

## Properties

### children?

> `readonly` `optional` **children?**: readonly `ContextMenuItemSpec`[]

Defined in: [src/facade/ContextMenuFacade.ts:28](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L28)

当前项目包含的嵌套菜单。

***

### disabled?

> `readonly` `optional` **disabled?**: `boolean`

Defined in: [src/facade/ContextMenuFacade.ts:24](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L24)

菜单项目是否禁用。

***

### key

> `readonly` **key**: `string`

Defined in: [src/facade/ContextMenuFacade.ts:18](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L18)

查询、更新和触发菜单项目时使用的唯一标识。

***

### label

> `readonly` **label**: `string`

Defined in: [src/facade/ContextMenuFacade.ts:20](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L20)

菜单中展示的名称。

***

### mutexKey?

> `readonly` `optional` **mutexKey?**: `string`

Defined in: [src/facade/ContextMenuFacade.ts:26](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L26)

当前项目显隐变化时，反向切换这些项目的可见状态。

***

### visible?

> `readonly` `optional` **visible?**: `boolean`

Defined in: [src/facade/ContextMenuFacade.ts:22](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L22)

菜单项目是否可见。
