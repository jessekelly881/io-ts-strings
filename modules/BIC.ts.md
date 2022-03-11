---
title: BIC.ts
nav_order: 5
parent: Modules
---

## BIC overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [BIC](#bic)
  - [BIC (type alias)](#bic-type-alias)
  - [BICBrand (interface)](#bicbrand-interface)

---

# utils

## BIC

**Signature**

```ts
export declare const BIC: t.BrandC<t.StringC, BICBrand>
```

Added in v1.0.0

## BIC (type alias)

**Signature**

```ts
export type BIC = t.Branded<string, BICBrand>
```

Added in v1.0.0

## BICBrand (interface)

**Signature**

```ts
export interface BICBrand {
  readonly BIC: unique symbol
}
```

Added in v1.0.0
