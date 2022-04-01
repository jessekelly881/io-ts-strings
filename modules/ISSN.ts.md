---
title: ISSN.ts
nav_order: 27
parent: Modules
---

## ISSN overview

International Standard Serial Number
ISO 3297

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ISSN](#issn)
  - [ISSN (type alias)](#issn-type-alias)
  - [ISSNBrand (interface)](#issnbrand-interface)

---

# utils

## ISSN

**Signature**

```ts
export declare const ISSN: t.BrandC<t.StringC, ISSNBrand>
```

Added in v1.0.0

## ISSN (type alias)

**Signature**

```ts
export type ISSN = t.Branded<string, ISSNBrand>
```

Added in v1.0.0

## ISSNBrand (interface)

**Signature**

```ts
export interface ISSNBrand {
  readonly ISSN: unique symbol
}
```

Added in v1.0.0
