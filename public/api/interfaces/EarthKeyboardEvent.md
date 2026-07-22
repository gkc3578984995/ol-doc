[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / EarthKeyboardEvent

# Interface: EarthKeyboardEvent

Defined in: [src/facade/EventFacade.ts:45](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L45)

Earth 键盘事件的公开载荷。

## Properties

### altKey

> `readonly` **altKey**: `boolean`

Defined in: [src/facade/EventFacade.ts:53](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L53)

Alt 修饰键是否按下。

***

### code

> `readonly` **code**: `string`

Defined in: [src/facade/EventFacade.ts:51](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L51)

浏览器事件的 `code`。

***

### ctrlKey

> `readonly` **ctrlKey**: `boolean`

Defined in: [src/facade/EventFacade.ts:55](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L55)

Ctrl 修饰键是否按下。

***

### key

> `readonly` **key**: `string`

Defined in: [src/facade/EventFacade.ts:49](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L49)

浏览器事件的 `key`。

***

### metaKey

> `readonly` **metaKey**: `boolean`

Defined in: [src/facade/EventFacade.ts:57](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L57)

Meta 修饰键是否按下。

***

### originalEvent

> `readonly` **originalEvent**: `KeyboardEvent`

Defined in: [src/facade/EventFacade.ts:61](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L61)

只在当前同步回调期间有效的 KeyboardEvent。

***

### shiftKey

> `readonly` **shiftKey**: `boolean`

Defined in: [src/facade/EventFacade.ts:59](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L59)

Shift 修饰键是否按下。

***

### type

> `readonly` **type**: `"keydown"`

Defined in: [src/facade/EventFacade.ts:47](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L47)

固定为 `keydown`。
