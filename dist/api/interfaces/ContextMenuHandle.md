[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ContextMenuHandle

# Interface: ContextMenuHandle

Defined in: [src/facade/ContextMenuFacade.ts:68](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L68)

一次右键菜单注册的公开句柄。

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [src/facade/ContextMenuFacade.ts:82](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ContextMenuFacade.ts#L82)

注销本次右键菜单注册。

#### Returns

`void`

#### Example

```ts
import { useEarth } from '@vrsim/earth-engine-ol';

const earth = useEarth();
const handle = earth.contextMenu.register('map', { items: [{ key: 'refresh', label: '刷新' }] });
handle.destroy();
```
