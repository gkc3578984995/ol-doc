[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / FlyToOptions

# Interface: FlyToOptions

Defined in: [src/facade/ViewService.ts:33](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L33)

飞行定位动画配置。

## Extends

- [`ViewAnimationOptions`](ViewAnimationOptions.md)

## Properties

### callback?

> `readonly` `optional` **callback?**: (`completed`) => `void`

Defined in: [src/facade/ViewService.ts:29](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L29)

动画完成或取消时调用。

#### Parameters

##### completed

`boolean`

#### Returns

`void`

#### Inherited from

[`ViewAnimationOptions`](ViewAnimationOptions.md).[`callback`](ViewAnimationOptions.md#callback)

***

### duration?

> `readonly` `optional` **duration?**: `number`

Defined in: [src/facade/ViewService.ts:25](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L25)

动画时长，单位为毫秒。

#### Inherited from

[`ViewAnimationOptions`](ViewAnimationOptions.md).[`duration`](ViewAnimationOptions.md#duration)

***

### easing?

> `readonly` `optional` **easing?**: (`progress`) => `number`

Defined in: [src/facade/ViewService.ts:27](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L27)

将线性动画进度映射为新的进度。

#### Parameters

##### progress

`number`

#### Returns

`number`

#### Inherited from

[`ViewAnimationOptions`](ViewAnimationOptions.md).[`easing`](ViewAnimationOptions.md#easing)

***

### zoom?

> `readonly` `optional` **zoom?**: `number`

Defined in: [src/facade/ViewService.ts:35](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/ViewService.ts#L35)

目标缩放级别；省略时保留当前值。
