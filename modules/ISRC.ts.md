---
title: ISRC.ts
nav_order: 26
parent: Modules
---

## ISRC overview

International Standard Recording Code
ISO 3901

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [decoders](#decoders)
  - [isrcDecoder](#isrcdecoder)
- [utils](#utils)
  - [ISRC](#isrc)
  - [ISRC (type alias)](#isrc-type-alias)
  - [ISRCBrand (interface)](#isrcbrand-interface)

---

# decoders

## isrcDecoder

**Signature**

```ts
export declare const isrcDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, ISRCBrand>>
```

Added in v1.1.0

# utils

## ISRC

**Signature**

```ts
export declare const ISRC: t.BrandC<t.StringC, ISRCBrand>
```

Added in v1.0.0

## ISRC (type alias)

**Signature**

```ts
export type ISRC = t.Branded<string, ISRCBrand>
```

Added in v1.0.0

## ISRCBrand (interface)

**Signature**

```ts
export interface ISRCBrand {
  readonly ISRC: unique symbol
}
```

Added in v1.0.0
