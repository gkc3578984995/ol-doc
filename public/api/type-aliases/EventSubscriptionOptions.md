[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / EventSubscriptionOptions

# Type Alias: EventSubscriptionOptions

> **EventSubscriptionOptions** = \{ `module?`: `never`; `selector?`: [`ElementSelector`](../interfaces/ElementSelector.md); `signal?`: `AbortSignal`; \} \| \{ `module`: `string`; `selector?`: `never`; `signal?`: `AbortSignal`; \}

Defined in: [src/facade/EventFacade.ts:83](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/EventFacade.ts#L83)

事件订阅的过滤和生命周期配置。

## Union Members

### Type Literal

\{ `module?`: `never`; `selector?`: [`ElementSelector`](../interfaces/ElementSelector.md); `signal?`: `AbortSignal`; \}

#### module?

> `readonly` `optional` **module?**: `never`

使用 Element 选择器时不得同时指定业务模块。

#### selector?

> `readonly` `optional` **selector?**: [`ElementSelector`](../interfaces/ElementSelector.md)

只接收命中匹配 Element 的指针事件。

#### signal?

> `readonly` `optional` **signal?**: `AbortSignal`

中止信号。触发后自动取消本次订阅。

***

### Type Literal

\{ `module`: `string`; `selector?`: `never`; `signal?`: `AbortSignal`; \}

#### module

> `readonly` **module**: `string`

只接收命中该业务模块中 Element 的指针事件。

#### selector?

> `readonly` `optional` **selector?**: `never`

使用业务模块过滤时不得同时指定 Element 选择器。

#### signal?

> `readonly` `optional` **signal?**: `AbortSignal`

中止信号。触发后自动取消本次订阅。
