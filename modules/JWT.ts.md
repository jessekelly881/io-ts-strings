---
title: JWT.ts
nav_order: 28
parent: Modules
---

## JWT overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [JWT](#jwt)
  - [JWT (type alias)](#jwt-type-alias)
  - [JWTBrand (interface)](#jwtbrand-interface)

---

# utils

## JWT

**Signature**

```ts
export declare const JWT: t.BrandC<t.StringC, JWTBrand>
```

Added in v1.0.0

## JWT (type alias)

**Signature**

```ts
export type JWT = t.Branded<string, JWTBrand>
```

Added in v1.0.0

## JWTBrand (interface)

**Signature**

```ts
export interface JWTBrand {
  readonly JWT: unique symbol
}
```

Added in v1.0.0
