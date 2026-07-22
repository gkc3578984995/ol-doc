[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / radToDeg

# Function: radToDeg()

> **radToDeg**(`radians`): `number`

Defined in: [src/utils/math.ts:63](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/math.ts#L63)

将弧度换算为 `0`（含）到 `360`（不含）之间的角度。

## Parameters

### radians

`number`

待换算的弧度值。

## Returns

`number`

归一化到一圈以内的角度。

## Example

```ts
import { radToDeg } from '@vrsim/earth-engine-ol';

const degrees = radToDeg(Math.PI);
```
