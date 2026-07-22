[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / AnimationManager

# Interface: AnimationManager

Defined in: [src/services/animation/types.ts:49](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L49)

统一播放和控制当前 Earth 的 Element 动画。

## Methods

### pause()

> **pause**(`selector`, `channels?`): `number`

Defined in: [src/services/animation/types.ts:75](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L75)

暂停匹配元素上的动画。

#### Parameters

##### selector

[`ElementSelector`](ElementSelector.md)

需要暂停动画的 Element。

##### channels?

readonly `string`[]

需要暂停的通道；省略时暂停匹配 Element 的全部动画。

#### Returns

`number`

本次增加暂停层级的动画数量。

#### Example

```ts
const count = earth.animations.pause({ module: 'vehicles' }, ['movement']);
```

***

### play()

> **play**(`selector`, `spec`): [`AnimationHandle`](AnimationHandle.md)

Defined in: [src/services/animation/types.ts:62](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L62)

为匹配的元素播放动画。

#### Parameters

##### selector

[`ElementSelector`](ElementSelector.md)

需要播放动画的 Element。

##### spec

[`AnimationSpec`](../type-aliases/AnimationSpec.md)

动画类型及效果配置。

#### Returns

[`AnimationHandle`](AnimationHandle.md)

本次播放请求的控制句柄。

#### Example

```ts
const handle = earth.animations.play({ id: 'marker' }, { type: 'pulse' });
```

***

### resume()

> **resume**(`selector`, `channels?`): `number`

Defined in: [src/services/animation/types.ts:88](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L88)

恢复匹配 Element 上已暂停的动画。

#### Parameters

##### selector

[`ElementSelector`](ElementSelector.md)

需要恢复动画的 Element。

##### channels?

readonly `string`[]

需要恢复的通道；省略时恢复匹配 Element 的全部动画。

#### Returns

`number`

本次减少暂停层级的动画数量。

#### Example

```ts
const count = earth.animations.resume({ module: 'vehicles' }, ['movement']);
```

***

### stop()

> **stop**(`selector`, `channels?`): `number`

Defined in: [src/services/animation/types.ts:101](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L101)

停止匹配元素上的动画。

#### Parameters

##### selector

[`ElementSelector`](ElementSelector.md)

需要停止动画的 Element。

##### channels?

readonly `string`[]

需要停止的通道；省略时停止匹配 Element 的全部动画。

#### Returns

`number`

此次真正停止的动画数量。

#### Example

```ts
const count = earth.animations.stop({ module: 'vehicles' }, ['movement']);
```

***

### stopAll()

> **stopAll**(): `void`

Defined in: [src/services/animation/types.ts:110](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/services/animation/types.ts#L110)

停止当前 Earth 中的全部动画。

#### Returns

`void`

#### Example

```ts
earth.animations.stopAll();
```
