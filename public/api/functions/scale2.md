[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / scale2

# Function: scale2()

> **scale2**(`vector`, `factor`): [`Coordinate`](../type-aliases/Coordinate.md)

Defined in: [src/utils/math.ts:82](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/math.ts#L82)

按倍数缩放二维向量。

## Parameters

### vector

[`Coordinate`](../type-aliases/Coordinate.md)

待缩放的二维向量。

### factor

`number`

横纵分量共用的缩放倍数。

## Returns

[`Coordinate`](../type-aliases/Coordinate.md)

缩放后的新向量。

## Example

```ts
import { scale2 } from '@vrsim/earth-engine-ol';

const result = scale2([2, 3], 2);
```
