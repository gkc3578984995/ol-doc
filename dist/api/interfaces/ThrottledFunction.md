[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ThrottledFunction

# Interface: ThrottledFunction()\<This, Args, Result\>

Defined in: [src/utils/throttle.ts:8](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/throttle.ts#L8)

带取消和立即刷新能力的节流函数。

## Type Parameters

### This

`This`

原函数的 `this` 类型。

### Args

`Args` *extends* `unknown`[]

原函数的参数列表类型。

### Result

`Result`

原函数的返回值类型。

> **ThrottledFunction**(`this`, ...`args`): `Result` \| `undefined`

Defined in: [src/utils/throttle.ts:24](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/throttle.ts#L24)

调用节流函数。

## Parameters

### this

`This`

传给原函数的调用上下文。

### args

...`Args`

传给原函数的参数。

## Returns

`Result` \| `undefined`

本次执行结果；没有立即执行时返回上次结果或 `undefined`。

## Example

```ts
import { throttle } from '@vrsim/earth-engine-ol';

const update = throttle((value: number) => value * 2, 100);
const result = update(2);
```

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [src/utils/throttle.ts:37](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/throttle.ts#L37)

取消尚未执行的尾调用，并清空节流状态。

#### Returns

`void`

#### Example

```ts
import { throttle } from '@vrsim/earth-engine-ol';

const update = throttle(() => console.log('更新'), 100);
update.cancel();
```

***

### flush()

> **flush**(): `Result` \| `undefined`

Defined in: [src/utils/throttle.ts:52](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/throttle.ts#L52)

立即执行还在等待的尾调用。

#### Returns

`Result` \| `undefined`

最新一次执行结果；没有结果时返回 `undefined`。

#### Example

```ts
import { throttle } from '@vrsim/earth-engine-ol';

const update = throttle((value: number) => value * 2, 100);
update(2);
const result = update.flush();
```
