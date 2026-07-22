[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / PathTrackStrokeSpec

# Type Alias: PathTrackStrokeSpec

> **PathTrackStrokeSpec** = `Omit`\<[`StrokeSpec`](../interfaces/StrokeSpec.md), `"fitPatternOnce"`\> & `object`

Defined in: [src/core/style/types.ts:332](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/core/style/types.ts#L332)

路径轨道允许的描边字段；固定像素轨道不支持整段虚线拟合。

## Type Declaration

### fitPatternOnce?

> `optional` **fitPatternOnce?**: `never`

`fitPatternOnce` 只属于顶层普通 Stroke，路径轨道明确禁止。
