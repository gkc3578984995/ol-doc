[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / throttle

# Function: throttle()

> **throttle**\<`This`, `Args`, `Result`\>(`fn`, `wait?`, `options?`): [`ThrottledFunction`](../interfaces/ThrottledFunction.md)\<`This`, `Args`, `Result`\>

Defined in: [src/utils/throttle.ts:82](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/throttle.ts#L82)

创建一个节流函数，限制原函数在指定时间内的执行次数。

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

## Parameters

### fn

(`this`, ...`args`) => `Result`

需要限制执行频率的函数。

### wait?

`number` = `0`

两次执行之间的最短间隔，单位为毫秒。

### options?

[`ThrottleOptions`](../interfaces/ThrottleOptions.md) = `{}`

首、尾调用配置。

## Returns

[`ThrottledFunction`](../interfaces/ThrottledFunction.md)\<`This`, `Args`, `Result`\>

带有取消和立即执行能力的节流函数。

## Example

```ts
import { throttle } from '@vrsim/earth-engine-ol';

const onMove = throttle((x: number, y: number) => console.log(x, y), 50);
onMove(120, 80);
```
