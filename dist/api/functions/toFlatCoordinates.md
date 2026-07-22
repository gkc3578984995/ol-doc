[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / toFlatCoordinates

# Function: toFlatCoordinates()

> **toFlatCoordinates**(`coordinates`): `number`[]

Defined in: [src/utils/math.ts:27](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/math.ts#L27)

将二维坐标数组依次展开为一维数组。

## Parameters

### coordinates

readonly readonly `number`[][]

待展开的二维坐标数组。

## Returns

`number`[]

新的一维数组；原数组保持不变。

## Example

```ts
import { toFlatCoordinates } from '@vrsim/earth-engine-ol';

const saved = toFlatCoordinates([[120, 0], [110, 0]]);
// [120, 0, 110, 0]
```
