[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ElementProtectionState

# Interface: ElementProtectionState

Defined in: src/core/protection/types.ts:23

当前 Earth 实例内某个 Element 的协同保护运行态。

## Properties

### elementId

> `readonly` **elementId**: `string`

Defined in: src/core/protection/types.ts:25

被保护的 Element ID。

***

### expiresAt?

> `readonly` `optional` **expiresAt?**: `number`

Defined in: src/core/protection/types.ts:35

自动解除保护的毫秒时间戳。

***

### operatorId?

> `readonly` `optional` **operatorId?**: `string`

Defined in: src/core/protection/types.ts:29

协作者的稳定业务标识。

***

### operatorName?

> `readonly` `optional` **operatorName?**: `string`

Defined in: src/core/protection/types.ts:31

展示在保护标签中的协作者名称。

***

### protected

> `readonly` **protected**: `true`

Defined in: src/core/protection/types.ts:27

已建立的状态固定为 `true`。

***

### revision?

> `readonly` `optional` **revision?**: `number`

Defined in: src/core/protection/types.ts:33

最近接受的调用方版本。
