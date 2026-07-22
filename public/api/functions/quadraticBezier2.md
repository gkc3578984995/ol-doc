[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / quadraticBezier2

# Function: quadraticBezier2()

> **quadraticBezier2**(`start`, `control`, `end`, `ratio`): [`Coordinate`](../type-aliases/Coordinate.md)

Defined in: [src/utils/math.ts:139](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/math.ts#L139)

计算二次贝塞尔曲线上的坐标。

## Parameters

### start

[`Coordinate`](../type-aliases/Coordinate.md)

曲线起点。

### control

[`Coordinate`](../type-aliases/Coordinate.md)

决定曲线弯曲方向的控制点。

### end

[`Coordinate`](../type-aliases/Coordinate.md)

曲线终点。

### ratio

`number`

曲线上的取值比例，通常为 `0` 到 `1`。

## Returns

[`Coordinate`](../type-aliases/Coordinate.md)

曲线上对应位置的新坐标。

## Example

```ts
import { quadraticBezier2 } from '@vrsim/earth-engine-ol';

const point = quadraticBezier2([0, 0], [5, 10], [10, 0], 0.5);
```
