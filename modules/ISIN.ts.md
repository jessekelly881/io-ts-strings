---
title: ISIN.ts
nav_order: 25
parent: Modules
---

## ISIN overview

International Securities Identification Number
ISO 6166

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [brands](#brands)
  - [ISIN](#isin)
- [decoders](#decoders)
  - [isinDecoder](#isindecoder)
- [types](#types)
  - [ISIN (type alias)](#isin-type-alias)
  - [ISINBrand (interface)](#isinbrand-interface)

---

# brands

## ISIN

**Signature**

```ts
export declare const ISIN: t.BrandC<t.StringC, ISINBrand>
```

Added in v1.0.0

# decoders

## isinDecoder

**Signature**

```ts
export declare const isinDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, ISINBrand>>
```

Added in v1.1.0

# types

## ISIN (type alias)

**Signature**

```ts
export type ISIN = t.Branded<string, ISINBrand>
```

Added in v1.0.0

## ISINBrand (interface)

**Signature**

```ts
export interface ISINBrand {
  readonly ISIN: unique symbol
}
```

Added in v1.0.0
