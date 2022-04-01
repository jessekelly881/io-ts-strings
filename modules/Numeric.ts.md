---
title: Numeric.ts
nav_order: 36
parent: Modules
---

## Numeric overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Numeric](#numeric)
  - [Numeric (type alias)](#numeric-type-alias)
  - [NumericBrand (interface)](#numericbrand-interface)
  - [numericDecoder](#numericdecoder)

---

# utils

## Numeric

**Signature**

```ts
export declare const Numeric: t.BrandC<t.StringC, NumericBrand>
```

Added in v1.0.0

## Numeric (type alias)

**Signature**

```ts
export type Numeric = t.Branded<string, NumericBrand>
```

Added in v1.0.0

## NumericBrand (interface)

**Signature**

```ts
export interface NumericBrand {
  readonly Numeric: unique symbol
}
```

Added in v1.0.0

## numericDecoder

**Signature**

```ts
export declare const numericDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, NumericBrand>>
```

Added in v1.1.0
