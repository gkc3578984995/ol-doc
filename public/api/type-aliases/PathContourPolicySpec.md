[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / PathContourPolicySpec

# Type Alias: PathContourPolicySpec

> **PathContourPolicySpec** = \{ `kind`: `"open"`; \} \| \{ `kind`: `"closed"`; `rings`: `"outer"`; `seam`: `"preserve-spacing"`; \}

Defined in: [src/core/style/types.ts:317](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L317)

路径线饰作用于开放路径或 Polygon 闭合外环的策略。

## Union Members

### Type Literal

\{ `kind`: `"open"`; \}

#### kind

> **kind**: `"open"`

固定为开放路径。

***

### Type Literal

\{ `kind`: `"closed"`; `rings`: `"outer"`; `seam`: `"preserve-spacing"`; \}

#### kind

> **kind**: `"closed"`

固定为闭合路径。

#### rings

> **rings**: `"outer"`

第一版只装饰 Polygon 外环。

#### seam

> **seam**: `"preserve-spacing"`

保持固定间距，并把余量集中在闭合缝。
