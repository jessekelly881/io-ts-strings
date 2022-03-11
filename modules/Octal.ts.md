---
title: Octal.ts
nav_order: 37
parent: Modules
---

## Octal overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Octal](#octal)
  - [Octal (type alias)](#octal-type-alias)
  - [OctalBrand (interface)](#octalbrand-interface)

---

# utils

## Octal

**Signature**

```ts
export declare const Octal: t.BrandC<t.StringC, OctalBrand>
```

Added in v1.0.0

## Octal (type alias)

**Signature**

```ts
export type Octal = t.Branded<string, OctalBrand>
```

Added in v1.0.0

## OctalBrand (interface)

**Signature**

```ts
export interface OctalBrand {
  readonly Octal: unique symbol
}
```

Added in v1.0.0
