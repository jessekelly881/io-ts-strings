---
title: Email.ts
nav_order: 13
parent: Modules
---

## Email overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Email](#email)
  - [Email (type alias)](#email-type-alias)
  - [EmailBrand (interface)](#emailbrand-interface)

---

# utils

## Email

**Signature**

```ts
export declare const Email: t.BrandC<t.StringC, EmailBrand>
```

Added in v1.0.0

## Email (type alias)

**Signature**

```ts
export type Email = t.Branded<string, EmailBrand>
```

Added in v1.0.0

## EmailBrand (interface)

**Signature**

```ts
export interface EmailBrand {
  readonly Email: unique symbol
}
```

Added in v1.0.0
