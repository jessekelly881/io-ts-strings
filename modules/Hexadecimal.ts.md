---
title: Hexadecimal.ts
nav_order: 17
parent: Modules
---

## Hexadecimal overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Hexadecimal](#hexadecimal)
  - [Hexadecimal (type alias)](#hexadecimal-type-alias)
  - [HexadecimalBrand (interface)](#hexadecimalbrand-interface)
  - [hexadecimalDecoder](#hexadecimaldecoder)

---

# utils

## Hexadecimal

**Signature**

```ts
export declare const Hexadecimal: t.BrandC<t.StringC, HexadecimalBrand>
```

Added in v1.0.0

## Hexadecimal (type alias)

**Signature**

```ts
export type Hexadecimal = t.Branded<string, HexadecimalBrand>
```

Added in v1.0.0

## HexadecimalBrand (interface)

**Signature**

```ts
export interface HexadecimalBrand {
  readonly Hexadecimal: unique symbol
}
```

Added in v1.0.0

## hexadecimalDecoder

**Signature**

```ts
export declare const hexadecimalDecoder: <S extends string>() => D.Decoder<
  S,
  t.Branded<S, t.Branded<string, HexadecimalBrand>>
>
```

Added in v1.1.0
