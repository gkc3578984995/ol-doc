[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / closeRing

# Function: closeRing()

> **closeRing**(`coordinates`): [`Coordinate`](../type-aliases/Coordinate.md)[]

Defined in: [src/utils/math.ts:157](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/math.ts#L157)

闭合一组环坐标，必要时在末尾补上首坐标。

## Parameters

### coordinates

readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

待闭合的坐标列表。

## Returns

[`Coordinate`](../type-aliases/Coordinate.md)[]

首尾相同的新坐标列表。

## Example

```ts
import { closeRing } from '@vrsim/earth-engine-ol';

const ring = closeRing([[0, 0], [10, 0], [10, 10]]);
```
