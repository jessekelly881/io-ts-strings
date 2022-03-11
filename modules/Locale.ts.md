---
title: Locale.ts
nav_order: 30
parent: Modules
---

## Locale overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Locale](#locale)
  - [Locale (type alias)](#locale-type-alias)
  - [LocaleBrand (interface)](#localebrand-interface)

---

# utils

## Locale

**Signature**

```ts
export declare const Locale: t.BrandC<t.StringC, LocaleBrand>
```

Added in v1.0.0

## Locale (type alias)

**Signature**

```ts
export type Locale = t.Branded<string, LocaleBrand>
```

Added in v1.0.0

## LocaleBrand (interface)

**Signature**

```ts
export interface LocaleBrand {
  readonly Locale: unique symbol
}
```

Added in v1.0.0
