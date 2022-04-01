---
title: Uppercase.ts
nav_order: 45
parent: Modules
---

## Uppercase overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [decoders](#decoders)
  - [uppercaseDecoder](#uppercasedecoder)
- [utils](#utils)
  - [Uppercase](#uppercase)
  - [Uppercase (type alias)](#uppercase-type-alias)
  - [UppercaseBrand (interface)](#uppercasebrand-interface)

---

# decoders

## uppercaseDecoder

**Signature**

```ts
export declare const uppercaseDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, UppercaseBrand>>
```

Added in v1.1.0

# utils

## Uppercase

**Signature**

```ts
export declare const Uppercase: t.BrandC<t.StringC, UppercaseBrand>
```

Added in v1.0.0

## Uppercase (type alias)

**Signature**

```ts
export type Uppercase = t.Branded<string, UppercaseBrand>
```

Added in v1.0.0

## UppercaseBrand (interface)

**Signature**

```ts
export interface UppercaseBrand {
  readonly Uppercase: unique symbol
}
```

Added in v1.0.0
