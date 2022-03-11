---
title: ISIN.ts
nav_order: 25
parent: Modules
---

## ISIN overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ISIN](#isin)
  - [ISIN (type alias)](#isin-type-alias)
  - [ISINBrand (interface)](#isinbrand-interface)

---

# utils

## ISIN

**Signature**

```ts
export declare const ISIN: t.BrandC<t.StringC, ISINBrand>
```

Added in v1.0.0

## ISIN (type alias)

**Signature**

```ts
export type ISIN = t.Branded<string, ISINBrand>
```

Added in v1.0.0

## ISINBrand (interface)

**Signature**

```ts
export interface ISINBrand {
  readonly ISIN: unique symbol
}
```

Added in v1.0.0
