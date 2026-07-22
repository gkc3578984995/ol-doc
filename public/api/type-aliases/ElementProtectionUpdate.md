[**@vrsim/earth-engine-ol**](../README.md)

***

[@vrsim/earth-engine-ol](../globals.md) / ElementProtectionUpdate

# Type Alias: ElementProtectionUpdate

> **ElementProtectionUpdate** = \{ `expiresAt?`: `number`; `operatorId?`: `string`; `operatorName?`: `string`; `protected`: `true`; `revision?`: `number`; \} \| \{ `protected`: `false`; `revision?`: `number`; \}

Defined in: src/core/protection/types.ts:2

更新 Element 协同保护运行态的输入。

## Union Members

### Type Literal

\{ `expiresAt?`: `number`; `operatorId?`: `string`; `operatorName?`: `string`; `protected`: `true`; `revision?`: `number`; \}

#### expiresAt?

> `readonly` `optional` **expiresAt?**: `number`

自动解除保护的毫秒时间戳。

#### operatorId?

> `readonly` `optional` **operatorId?**: `string`

协作者的稳定业务标识。

#### operatorName?

> `readonly` `optional` **operatorName?**: `string`

展示在保护标签中的协作者名称。

#### protected

> `readonly` **protected**: `true`

建立或更新保护。

#### revision?

> `readonly` `optional` **revision?**: `number`

调用方提供的单调版本，用于丢弃乱序消息。

***

### Type Literal

\{ `protected`: `false`; `revision?`: `number`; \}

#### protected

> `readonly` **protected**: `false`

解除保护。

#### revision?

> `readonly` `optional` **revision?**: `number`

解锁消息参与同一单调版本序列。
