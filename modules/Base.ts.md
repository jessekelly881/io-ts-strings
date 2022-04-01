---
title: Base.ts
nav_order: 4
parent: Modules
---

## Base overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Base32](#base32)
  - [Base32 (type alias)](#base32-type-alias)
  - [Base32Brand (interface)](#base32brand-interface)
  - [Base58](#base58)
  - [Base58 (type alias)](#base58-type-alias)
  - [Base58Brand (interface)](#base58brand-interface)
  - [Base64](#base64)
  - [Base64 (type alias)](#base64-type-alias)
  - [Base64Brand (interface)](#base64brand-interface)
  - [baseDecoder](#basedecoder)

---

# utils

## Base32

**Signature**

```ts
export declare const Base32: t.BrandC<t.StringC, Base32Brand>
```

Added in v1.0.0

## Base32 (type alias)

**Signature**

```ts
export type Base32 = t.Branded<string, Base32Brand>
```

Added in v1.0.0

## Base32Brand (interface)

**Signature**

```ts
export interface Base32Brand {
  readonly Base32: unique symbol
}
```

Added in v1.0.0

## Base58

**Signature**

```ts
export declare const Base58: t.BrandC<t.StringC, Base58Brand>
```

Added in v1.0.0

## Base58 (type alias)

**Signature**

```ts
export type Base58 = t.Branded<string, Base58Brand>
```

Added in v1.0.0

## Base58Brand (interface)

**Signature**

```ts
export interface Base58Brand {
  readonly Base58: unique symbol
}
```

Added in v1.0.0

## Base64

**Signature**

```ts
export declare const Base64: t.BrandC<t.StringC, Base64Brand>
```

Added in v1.0.0

## Base64 (type alias)

**Signature**

```ts
export type Base64 = t.Branded<string, Base64Brand>
```

Added in v1.0.0

## Base64Brand (interface)

**Signature**

```ts
export interface Base64Brand {
  readonly Base64: unique symbol
}
```

Added in v1.0.0

## baseDecoder

**Signature**

```ts
export declare const baseDecoder: <S extends string, B extends '32' | '58' | '64' = '32'>(
  brand?: B
) => D.Decoder<S, t.Branded<S, BrandMap[B]>>
```

Added in v1.1.0
