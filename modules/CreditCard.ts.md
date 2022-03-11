---
title: CreditCard.ts
nav_order: 9
parent: Modules
---

## CreditCard overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [CreditCard](#creditcard)
  - [CreditCard (type alias)](#creditcard-type-alias)
  - [CreditCardBrand (interface)](#creditcardbrand-interface)
  - [Mastercard](#mastercard)
  - [Mastercard (type alias)](#mastercard-type-alias)
  - [MastercardBrand (interface)](#mastercardbrand-interface)
  - [Visa](#visa)
  - [Visa (type alias)](#visa-type-alias)
  - [VisaBrand (interface)](#visabrand-interface)

---

# utils

## CreditCard

Any Debit/Credit Card Number

**Signature**

```ts
export declare const CreditCard: t.BrandC<t.StringC, CreditCardBrand>
```

Added in v1.0.0

## CreditCard (type alias)

**Signature**

```ts
export type CreditCard = t.Branded<string, CreditCardBrand>
```

Added in v1.0.0

## CreditCardBrand (interface)

**Signature**

```ts
export interface CreditCardBrand {
  readonly CreditCard: unique symbol
}
```

Added in v1.0.0

## Mastercard

Mastercard Card Number

**Signature**

```ts
export declare const Mastercard: t.BrandC<t.StringC, MastercardBrand>
```

Added in v1.0.0

## Mastercard (type alias)

**Signature**

```ts
export type Mastercard = t.Branded<string, MastercardBrand>
```

Added in v1.0.0

## MastercardBrand (interface)

**Signature**

```ts
export interface MastercardBrand {
  readonly Mastercard: unique symbol
}
```

Added in v1.0.0

## Visa

**Signature**

```ts
export declare const Visa: t.BrandC<t.StringC, VisaBrand>
```

Added in v1.0.0

## Visa (type alias)

**Signature**

```ts
export type Visa = t.Branded<string, VisaBrand>
```

Added in v1.0.0

## VisaBrand (interface)

**Signature**

```ts
export interface VisaBrand {
  readonly Visa: unique symbol
}
```

Added in v1.0.0
