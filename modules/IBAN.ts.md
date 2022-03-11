---
title: IBAN.ts
nav_order: 21
parent: Modules
---

## IBAN overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [IBAN](#iban)
  - [IBAN (type alias)](#iban-type-alias)
  - [IBANBrand (interface)](#ibanbrand-interface)

---

# utils

## IBAN

**Signature**

```ts
export declare const IBAN: t.BrandC<t.StringC, IBANBrand>
```

Added in v1.0.0

## IBAN (type alias)

**Signature**

```ts
export type IBAN = t.Branded<string, IBANBrand>
```

Added in v1.0.0

## IBANBrand (interface)

**Signature**

```ts
export interface IBANBrand {
  readonly IBAN: unique symbol
}
```

Added in v1.0.0
