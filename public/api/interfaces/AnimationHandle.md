[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / AnimationHandle

# Interface: AnimationHandle

Defined in: [src/services/animation/types.ts:8](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L8)

控制一组由同次播放请求启动的动画。

## Properties

### finished

> `readonly` **finished**: `Promise`\<`void`\>

Defined in: [src/services/animation/types.ts:14](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L14)

所有动画自然结束或被停止后兑现。

***

### id

> `readonly` **id**: `string`

Defined in: [src/services/animation/types.ts:10](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L10)

本次播放请求的唯一 ID。

***

### status

> `readonly` **status**: [`AnimationStatus`](../type-aliases/AnimationStatus.md)

Defined in: [src/services/animation/types.ts:12](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L12)

这组动画的整体运行状态。

## Methods

### pause()

> **pause**(): `void`

Defined in: [src/services/animation/types.ts:24](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L24)

暂停当前动画。

#### Returns

`void`

#### Example

```ts
const handle = earth.animations.play({ id: 'marker' }, { type: 'pulse' });
handle.pause();
```

***

### resume()

> **resume**(): `void`

Defined in: [src/services/animation/types.ts:35](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L35)

继续播放已暂停的动画。

#### Returns

`void`

#### Example

```ts
const handle = earth.animations.play({ id: 'marker' }, { type: 'pulse' });
handle.pause();
handle.resume();
```

***

### stop()

> **stop**(): `void`

Defined in: [src/services/animation/types.ts:45](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L45)

停止当前动画。

#### Returns

`void`

#### Example

```ts
const handle = earth.animations.play({ id: 'marker' }, { type: 'pulse' });
handle.stop();
```
