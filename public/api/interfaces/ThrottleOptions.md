[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ThrottleOptions

# Interface: ThrottleOptions

Defined in: [src/utils/throttle.ts:56](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/throttle.ts#L56)

控制一轮节流等待的首、尾调用。

## Properties

### leading?

> `optional` **leading?**: `boolean`

Defined in: [src/utils/throttle.ts:58](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/throttle.ts#L58)

是否在等待开始时立即执行第一次调用。

***

### trailing?

> `optional` **trailing?**: `boolean`

Defined in: [src/utils/throttle.ts:60](https://github.com/gkc3578984995/openlayerengine/blob/fbb909494fe07835405da572510365d128c1e5a0/src/utils/throttle.ts#L60)

是否在等待结束时执行最后一次调用。
