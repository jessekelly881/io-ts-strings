---
title: EAN.ts
nav_order: 12
parent: Modules
---

## EAN overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [EAN](#ean)
  - [EAN (type alias)](#ean-type-alias)
  - [EANBrand (interface)](#eanbrand-interface)
  - [eanDecoder](#eandecoder)

---

# utils

## EAN

**Signature**

```ts
export declare const EAN: t.BrandC<t.StringC, EANBrand>
```

Added in v1.0.0

## EAN (type alias)

**Signature**

```ts
export type EAN = t.Branded<string, EANBrand>
```

Added in v1.0.0

## EANBrand (interface)

**Signature**

```ts
export interface EANBrand {
  readonly EAN: unique symbol
}
```

Added in v1.0.0

## eanDecoder

**Signature**

```ts
export declare const eanDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, EANBrand>>
```

Added in v1.1.0
