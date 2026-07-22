[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / trimClosingCoordinate

# Function: trimClosingCoordinate()

> **trimClosingCoordinate**(`coordinates`): [`Coordinate`](../type-aliases/Coordinate.md)[]

Defined in: [src/utils/math.ts:177](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/math.ts#L177)

移除环坐标末尾重复的闭合点。

## Parameters

### coordinates

readonly [`Coordinate`](../type-aliases/Coordinate.md)[]

可能已经闭合的坐标列表。

## Returns

[`Coordinate`](../type-aliases/Coordinate.md)[]

去除末尾重复闭合点的新列表。

## Example

```ts
import { trimClosingCoordinate } from '@vrsim/earth-engine-ol';

const points = trimClosingCoordinate([[0, 0], [10, 0], [0, 0]]);
```
