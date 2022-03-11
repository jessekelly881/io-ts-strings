---
title: CurrencyCode.ts
nav_order: 10
parent: Modules
---

## CurrencyCode overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [CurrencyCode](#currencycode)
  - [CurrencyCode (type alias)](#currencycode-type-alias)
  - [CurrencyCodeBrand (interface)](#currencycodebrand-interface)

---

# utils

## CurrencyCode

**Signature**

```ts
export declare const CurrencyCode: t.BrandC<t.StringC, CurrencyCodeBrand>
```

Added in v1.0.0

## CurrencyCode (type alias)

**Signature**

```ts
export type CurrencyCode = t.Branded<string, CurrencyCodeBrand>
```

Added in v1.0.0

## CurrencyCodeBrand (interface)

**Signature**

```ts
export interface CurrencyCodeBrand {
  readonly CurrencyCode: unique symbol
}
```

Added in v1.0.0
