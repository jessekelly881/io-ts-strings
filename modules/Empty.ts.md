---
title: Empty.ts
nav_order: 14
parent: Modules
---

## Empty overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Empty](#empty)
  - [Empty (type alias)](#empty-type-alias)
  - [EmptyBrand (interface)](#emptybrand-interface)
  - [emptyDecoder](#emptydecoder)

---

# utils

## Empty

**Signature**

```ts
export declare const Empty: t.BrandC<t.StringC, EmptyBrand>
```

Added in v1.0.0

## Empty (type alias)

**Signature**

```ts
export type Empty = t.Branded<string, EmptyBrand>
```

Added in v1.0.0

## EmptyBrand (interface)

**Signature**

```ts
export interface EmptyBrand {
  readonly Empty: unique symbol
}
```

Added in v1.0.0

## emptyDecoder

**Signature**

```ts
export declare const emptyDecoder: D.Decoder<string, t.Branded<string, EmptyBrand>>
```

Added in v1.1.0
