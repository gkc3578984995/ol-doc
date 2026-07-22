[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / add2

# Function: add2()

> **add2**(`left`, `right`): [`Coordinate`](../type-aliases/Coordinate.md)

Defined in: [src/utils/math.ts:100](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/math.ts#L100)

将两个二维向量相加。

## Parameters

### left

[`Coordinate`](../type-aliases/Coordinate.md)

第一个向量。

### right

[`Coordinate`](../type-aliases/Coordinate.md)

第二个向量。

## Returns

[`Coordinate`](../type-aliases/Coordinate.md)

相加后的新向量。

## Example

```ts
import { add2 } from '@vrsim/earth-engine-ol';

const result = add2([1, 2], [3, 4]);
```
