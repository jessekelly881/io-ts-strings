---
title: AlphaNumeric.ts
nav_order: 2
parent: Modules
---

## AlphaNumeric overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [AlphaNumeric](#alphanumeric)
  - [AlphaNumeric (type alias)](#alphanumeric-type-alias)
  - [AlphaNumericBrand (interface)](#alphanumericbrand-interface)
  - [alphaNumericDecoder](#alphanumericdecoder)

---

# utils

## AlphaNumeric

**Signature**

```ts
export declare const AlphaNumeric: t.BrandC<t.StringC, AlphaNumericBrand>
```

Added in v1.0.0

## AlphaNumeric (type alias)

**Signature**

```ts
export type AlphaNumeric = t.Branded<string, AlphaNumericBrand>
```

Added in v1.0.0

## AlphaNumericBrand (interface)

**Signature**

```ts
export interface AlphaNumericBrand {
  readonly AlphaNumeric: unique symbol
}
```

Added in v1.0.0

## alphaNumericDecoder

**Signature**

```ts
export declare const alphaNumericDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, AlphaNumericBrand>>
```

Added in v1.1.0
