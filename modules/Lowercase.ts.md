---
title: Lowercase.ts
nav_order: 31
parent: Modules
---

## Lowercase overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Lowercase](#lowercase)
  - [Lowercase (type alias)](#lowercase-type-alias)
  - [LowercaseBrand (interface)](#lowercasebrand-interface)

---

# utils

## Lowercase

**Signature**

```ts
export declare const Lowercase: t.BrandC<t.StringC, LowercaseBrand>
```

Added in v1.0.0

## Lowercase (type alias)

**Signature**

```ts
export type Lowercase = t.Branded<string, LowercaseBrand>
```

Added in v1.0.0

## LowercaseBrand (interface)

**Signature**

```ts
export interface LowercaseBrand {
  readonly Lowercase: unique symbol
}
```

Added in v1.0.0
