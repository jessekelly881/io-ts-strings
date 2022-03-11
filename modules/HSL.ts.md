---
title: HSL.ts
nav_order: 20
parent: Modules
---

## HSL overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [HSL](#hsl)
  - [HSL (type alias)](#hsl-type-alias)
  - [HSLBrand (interface)](#hslbrand-interface)

---

# utils

## HSL

**Signature**

```ts
export declare const HSL: t.BrandC<t.StringC, HSLBrand>
```

Added in v1.0.0

## HSL (type alias)

**Signature**

```ts
export type HSL = t.Branded<string, HSLBrand>
```

Added in v1.0.0

## HSLBrand (interface)

**Signature**

```ts
export interface HSLBrand {
  readonly HSL: unique symbol
}
```

Added in v1.0.0
