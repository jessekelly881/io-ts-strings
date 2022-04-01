---
title: EthereumAddress.ts
nav_order: 15
parent: Modules
---

## EthereumAddress overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [brands](#brands)
  - [EthereumAddress](#ethereumaddress)
- [decoders](#decoders)
  - [ethereumAddressDecoder](#ethereumaddressdecoder)
- [types](#types)
  - [EthereumAddress (type alias)](#ethereumaddress-type-alias)
  - [EthereumAddressBrand (interface)](#ethereumaddressbrand-interface)

---

# brands

## EthereumAddress

**Signature**

```ts
export declare const EthereumAddress: t.BrandC<t.StringC, EthereumAddressBrand>
```

Added in v1.0.0

# decoders

## ethereumAddressDecoder

**Signature**

```ts
export declare const ethereumAddressDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, EthereumAddressBrand>>
```

Added in v1.1.0

# types

## EthereumAddress (type alias)

**Signature**

```ts
export type EthereumAddress = t.Branded<string, EthereumAddressBrand>
```

Added in v1.0.0

## EthereumAddressBrand (interface)

**Signature**

```ts
export interface EthereumAddressBrand {
  readonly EthereumAddress: unique symbol
}
```

Added in v1.0.0
