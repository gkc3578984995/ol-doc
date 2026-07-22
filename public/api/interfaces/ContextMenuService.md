[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ContextMenuService

# Interface: ContextMenuService

Defined in: [src/facade/ContextMenuFacade.ts:86](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L86)

注册和控制右键菜单的公开服务。

## Methods

### clearElementState()

> **clearElementState**(`elementId`): `void`

Defined in: [src/facade/ContextMenuFacade.ts:192](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L192)

清除指定 Element 保存的菜单项目状态。

#### Parameters

##### elementId

`string`

要清除菜单状态的 Element ID。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.contextMenu.clearElementState('target');
```

***

### close()

> **close**(): `void`

Defined in: [src/facade/ContextMenuFacade.ts:205](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L205)

关闭当前显示的右键菜单。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.contextMenu.close();
```

***

### getItemState()

> **getItemState**(`target`, `key`): [`ContextMenuItemState`](ContextMenuItemState.md) \| `undefined`

Defined in: [src/facade/ContextMenuFacade.ts:118](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L118)

读取地图或 Element 菜单项目的当前状态。

#### Parameters

##### target

[`ContextMenuStateTarget`](../type-aliases/ContextMenuStateTarget.md)

要查询的地图或 Element。

##### key

`string`

要查询的菜单项目标识。

#### Returns

[`ContextMenuItemState`](ContextMenuItemState.md) \| `undefined`

项目状态快照，项目不存在时返回 `undefined`。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const state = earth.contextMenu.getItemState('map', 'center');
```

***

### register()

> **register**(`target`, `spec`): [`ContextMenuHandle`](ContextMenuHandle.md)

Defined in: [src/facade/ContextMenuFacade.ts:102](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L102)

为地图、业务模块或 Element 注册右键菜单。

#### Parameters

##### target

[`ContextMenuTarget`](../type-aliases/ContextMenuTarget.md)

菜单生效的地图、Element 或业务模块。

##### spec

[`ContextMenuSpec`](ContextMenuSpec.md)

菜单项目及其显示前和选择回调。

#### Returns

[`ContextMenuHandle`](ContextMenuHandle.md)

用于注销本次注册的控制句柄。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const handle = earth.contextMenu.register('map', { items: [{ key: 'center', label: '回到中心' }] });
```

***

### setItemState()

> **setItemState**(`target`, `key`, `patch`): `void`

Defined in: [src/facade/ContextMenuFacade.ts:134](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L134)

更新地图或 Element 菜单项目的状态。

#### Parameters

##### target

[`ContextMenuStateTarget`](../type-aliases/ContextMenuStateTarget.md)

要更新的地图或 Element。

##### key

`string`

要更新的菜单项目标识。

##### patch

`Partial`\<[`ContextMenuItemState`](ContextMenuItemState.md)\>

可见和禁用状态的部分更新。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.contextMenu.setItemState('map', 'center', { disabled: true });
```

***

### setTheme()

> **setTheme**(`theme`): `void`

Defined in: [src/facade/ContextMenuFacade.ts:164](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L164)

设置右键菜单主题。

#### Parameters

##### theme

`"light"` \| `"dark"`

要使用的明亮或暗色主题。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
earth.contextMenu.setTheme('dark');
```

***

### toggleItem()

> **toggleItem**(`target`, `key`): [`ContextMenuItemState`](ContextMenuItemState.md)

Defined in: [src/facade/ContextMenuFacade.ts:150](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L150)

切换地图或 Element 菜单项目的状态。

#### Parameters

##### target

[`ContextMenuStateTarget`](../type-aliases/ContextMenuStateTarget.md)

要更新的地图或 Element。

##### key

`string`

要切换状态的菜单项目标识。

#### Returns

[`ContextMenuItemState`](ContextMenuItemState.md)

切换后的菜单项目状态快照。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const state = earth.contextMenu.toggleItem('map', 'center');
```

***

### toggleTheme()

> **toggleTheme**(): `"light"` \| `"dark"`

Defined in: [src/facade/ContextMenuFacade.ts:178](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L178)

在明亮和暗色主题之间切换。

#### Returns

`"light"` \| `"dark"`

切换后正在使用的主题名称。

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const theme = earth.contextMenu.toggleTheme();
```
