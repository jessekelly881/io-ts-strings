---
title: SemVer.ts
nav_order: 42
parent: Modules
---

## SemVer overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [decoders](#decoders)
  - [semVerDecoder](#semverdecoder)
- [utils](#utils)
  - [SemVer](#semver)
  - [SemVer (type alias)](#semver-type-alias)
  - [SemVerBrand (interface)](#semverbrand-interface)

---

# decoders

## semVerDecoder

**Signature**

```ts
export declare const semVerDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, SemVerBrand>>
```

Added in v1.1.0

# utils

## SemVer

**Signature**

```ts
export declare const SemVer: t.BrandC<t.StringC, SemVerBrand>
```

Added in v1.0.0

## SemVer (type alias)

**Signature**

```ts
export type SemVer = t.Branded<string, SemVerBrand>
```

Added in v1.0.0

## SemVerBrand (interface)

**Signature**

```ts
export interface SemVerBrand {
  readonly SemVer: unique symbol
}
```

Added in v1.0.0
