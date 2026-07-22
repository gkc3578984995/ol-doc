[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / PanIntoViewSpec

# Interface: PanIntoViewSpec

Defined in: [src/facade/overlayTypes.ts:11](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L11)

将 Overlay 平移到可视区域内的配置。

## Properties

### duration?

> `readonly` `optional` **duration?**: `number`

Defined in: [src/facade/overlayTypes.ts:15](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L15)

视图平移动画的时长，单位为毫秒。

***

### easing?

> `readonly` `optional` **easing?**: (`progress`) => `number`

Defined in: [src/facade/overlayTypes.ts:17](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L17)

将 `0` 到 `1` 的线性进度映射为动画进度。

#### Parameters

##### progress

`number`

#### Returns

`number`

***

### margin?

> `readonly` `optional` **margin?**: `number`

Defined in: [src/facade/overlayTypes.ts:13](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/facade/overlayTypes.ts#L13)

Overlay 与视口边缘保留的距离，单位为 CSS 像素。
