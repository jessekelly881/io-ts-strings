---
title: StrongPassword.ts
nav_order: 43
parent: Modules
---

## StrongPassword overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [StrongPassword](#strongpassword)
  - [StrongPassword (type alias)](#strongpassword-type-alias)
  - [StrongPasswordBrand (interface)](#strongpasswordbrand-interface)

---

# utils

## StrongPassword

**Signature**

```ts
export declare const StrongPassword: t.BrandC<t.StringC, StrongPasswordBrand>
```

Added in v1.0.0

## StrongPassword (type alias)

**Signature**

```ts
export type StrongPassword = t.Branded<string, StrongPasswordBrand>
```

Added in v1.0.0

## StrongPasswordBrand (interface)

**Signature**

```ts
export interface StrongPasswordBrand {
  readonly StrongPassword: unique symbol
}
```

Added in v1.0.0
