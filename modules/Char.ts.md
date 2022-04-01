---
title: Char.ts
nav_order: 7
parent: Modules
---

## Char overview

A string of length one.

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Char](#char)
  - [Char (type alias)](#char-type-alias)
  - [CharBrand (interface)](#charbrand-interface)
  - [charDecoder](#chardecoder)
  - [isChar](#ischar)

---

# utils

## Char

**Signature**

```ts
export declare const Char: t.BrandC<t.StringC, CharBrand>
```

Added in v1.0.0

## Char (type alias)

**Signature**

```ts
export type Char = t.Branded<string, CharBrand>
```

Added in v1.0.0

## CharBrand (interface)

**Signature**

```ts
export interface CharBrand {
  readonly Char: unique symbol
}
```

Added in v1.0.0

## charDecoder

**Signature**

```ts
export declare const charDecoder: <S extends string>() => D.Decoder<S, t.Branded<S, t.Branded<string, CharBrand>>>
```

Added in v1.1.0

## isChar

**Signature**

```ts
export declare const isChar: (s: string) => boolean
```

Added in v1.0.0
