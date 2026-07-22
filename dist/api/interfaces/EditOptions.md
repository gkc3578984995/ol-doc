[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / EditOptions

# Interface: EditOptions

Defined in: [src/facade/drawTypes.ts:33](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L33)

Edit Session 的启动配置。

## Properties

### policy?

> `optional` **policy?**: [`InteractionPolicy`](../type-aliases/InteractionPolicy.md)

Defined in: [src/facade/drawTypes.ts:37](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L37)

交互冲突策略：`replace` 替换旧交互，`reject` 拒绝新交互。

***

### underlay?

> `optional` **underlay?**: `boolean`

Defined in: [src/facade/drawTypes.ts:35](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/drawTypes.ts#L35)

是否在临时编辑图层中保留进入编辑时的原始几何。
