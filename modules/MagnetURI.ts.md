---
title: MagnetURI.ts
nav_order: 33
parent: Modules
---

## MagnetURI overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [MagnetURI](#magneturi)
  - [MagnetURI (type alias)](#magneturi-type-alias)
  - [MagnetURIBrand (interface)](#magneturibrand-interface)

---

# utils

## MagnetURI

**Signature**

```ts
export declare const MagnetURI: t.BrandC<t.StringC, MagnetURIBrand>
```

Added in v1.0.0

## MagnetURI (type alias)

**Signature**

```ts
export type MagnetURI = t.Branded<string, MagnetURIBrand>
```

Added in v1.0.0

## MagnetURIBrand (interface)

**Signature**

```ts
export interface MagnetURIBrand {
  readonly MagnetURI: unique symbol
}
```

Added in v1.0.0
