---
title: URL.ts
nav_order: 46
parent: Modules
---

## URL overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [decoders](#decoders)
  - [urlDecoder](#urldecoder)
- [utils](#utils)
  - [URL](#url)
  - [URL (type alias)](#url-type-alias)
  - [URLBrand (interface)](#urlbrand-interface)

---

# decoders

## urlDecoder

**Signature**

```ts
export declare const urlDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, URLBrand>>
```

Added in v1.1.0

# utils

## URL

**Signature**

```ts
export declare const URL: t.BrandC<t.StringC, URLBrand>
```

Added in v1.0.0

## URL (type alias)

**Signature**

```ts
export type URL = t.Branded<string, URLBrand>
```

Added in v1.0.0

## URLBrand (interface)

**Signature**

```ts
export interface URLBrand {
  readonly URL: unique symbol
}
```

Added in v1.0.0
