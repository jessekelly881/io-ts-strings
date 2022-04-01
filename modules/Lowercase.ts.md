---
title: Lowercase.ts
nav_order: 31
parent: Modules
---

## Lowercase overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [brands](#brands)
  - [Lowercase](#lowercase)
- [decoders](#decoders)
  - [lowercaseDecoder](#lowercasedecoder)
- [types](#types)
  - [Lowercase (type alias)](#lowercase-type-alias)
  - [LowercaseBrand (interface)](#lowercasebrand-interface)

---

# brands

## Lowercase

**Signature**

```ts
export declare const Lowercase: t.BrandC<t.StringC, LowercaseBrand>
```

Added in v1.0.0

# decoders

## lowercaseDecoder

**Signature**

```ts
export declare const lowercaseDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, LowercaseBrand>>
```

Added in v1.1.0

# types

## Lowercase (type alias)

**Signature**

```ts
export type Lowercase = t.Branded<string, LowercaseBrand>
```

Added in v1.0.0

## LowercaseBrand (interface)

**Signature**

```ts
export interface LowercaseBrand {
  readonly Lowercase: unique symbol
}
```

Added in v1.0.0
