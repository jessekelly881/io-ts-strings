---
title: Alpha.ts
nav_order: 1
parent: Modules
---

## Alpha overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Alpha](#alpha)
  - [Alpha (type alias)](#alpha-type-alias)
  - [AlphaBrand (interface)](#alphabrand-interface)
  - [alphaDecoder](#alphadecoder)

---

# utils

## Alpha

**Signature**

```ts
export declare const Alpha: t.BrandC<t.StringC, AlphaBrand>
```

Added in v1.0.0

## Alpha (type alias)

**Signature**

```ts
export type Alpha = t.Branded<string, AlphaBrand>
```

Added in v1.0.0

## AlphaBrand (interface)

**Signature**

```ts
export interface AlphaBrand {
  readonly Alpha: unique symbol
}
```

Added in v1.0.0

## alphaDecoder

**Signature**

```ts
export declare const alphaDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, AlphaBrand>>
```

Added in v1.1.0
