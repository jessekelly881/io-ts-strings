---
title: Ascii.ts
nav_order: 3
parent: Modules
---

## Ascii overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Ascii](#ascii)
  - [Ascii (type alias)](#ascii-type-alias)
  - [AsciiBrand (interface)](#asciibrand-interface)
  - [asciiDecoder](#asciidecoder)

---

# utils

## Ascii

**Signature**

```ts
export declare const Ascii: t.BrandC<t.StringC, AsciiBrand>
```

Added in v1.0.0

## Ascii (type alias)

**Signature**

```ts
export type Ascii = t.Branded<string, AsciiBrand>
```

Added in v1.0.0

## AsciiBrand (interface)

**Signature**

```ts
export interface AsciiBrand {
  readonly Ascii: unique symbol
}
```

Added in v1.0.0

## asciiDecoder

**Signature**

```ts
export declare const asciiDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, AsciiBrand>>
```

Added in v1.1.0
