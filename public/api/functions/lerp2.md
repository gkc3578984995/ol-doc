[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / lerp2

# Function: lerp2()

> **lerp2**(`start`, `end`, `ratio`): [`Coordinate`](../type-aliases/Coordinate.md)

Defined in: [src/utils/math.ts:119](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/math.ts#L119)

计算两个坐标之间的线性插值。

## Parameters

### start

[`Coordinate`](../type-aliases/Coordinate.md)

插值起点。

### end

[`Coordinate`](../type-aliases/Coordinate.md)

插值终点。

### ratio

`number`

插值比例；`0` 返回起点，`1` 返回终点。

## Returns

[`Coordinate`](../type-aliases/Coordinate.md)

插值得到的新坐标。

## Example

```ts
import { lerp2 } from '@vrsim/earth-engine-ol';

const midpoint = lerp2([0, 0], [10, 20], 0.5);
```
