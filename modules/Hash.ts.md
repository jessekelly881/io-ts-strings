---
title: Hash.ts
nav_order: 16
parent: Modules
---

## Hash overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [MD4](#md4)
  - [MD4 (type alias)](#md4-type-alias)
  - [MD4Brand (interface)](#md4brand-interface)
  - [MD5](#md5)
  - [MD5 (type alias)](#md5-type-alias)
  - [MD5Brand (interface)](#md5brand-interface)
  - [SHA1](#sha1)
  - [SHA1 (type alias)](#sha1-type-alias)
  - [SHA1Brand (interface)](#sha1brand-interface)
  - [SHA256](#sha256)
  - [SHA256 (type alias)](#sha256-type-alias)
  - [SHA256Brand (interface)](#sha256brand-interface)

---

# utils

## MD4

**Signature**

```ts
export declare const MD4: t.BrandC<t.StringC, MD4Brand>
```

Added in v1.0.0

## MD4 (type alias)

**Signature**

```ts
export type MD4 = t.Branded<string, MD4Brand>
```

Added in v1.0.0

## MD4Brand (interface)

**Signature**

```ts
export interface MD4Brand {
  readonly MD4: unique symbol
}
```

Added in v1.0.0

## MD5

**Signature**

```ts
export declare const MD5: t.BrandC<t.StringC, MD5Brand>
```

Added in v1.0.0

## MD5 (type alias)

**Signature**

```ts
export type MD5 = t.Branded<string, MD5Brand>
```

Added in v1.0.0

## MD5Brand (interface)

**Signature**

```ts
export interface MD5Brand {
  readonly MD5: unique symbol
}
```

Added in v1.0.0

## SHA1

**Signature**

```ts
export declare const SHA1: t.BrandC<t.StringC, SHA1Brand>
```

Added in v1.0.0

## SHA1 (type alias)

**Signature**

```ts
export type SHA1 = t.Branded<string, SHA1Brand>
```

Added in v1.0.0

## SHA1Brand (interface)

**Signature**

```ts
export interface SHA1Brand {
  readonly SHA1: unique symbol
}
```

Added in v1.0.0

## SHA256

**Signature**

```ts
export declare const SHA256: t.BrandC<t.StringC, SHA256Brand>
```

Added in v1.0.0

## SHA256 (type alias)

**Signature**

```ts
export type SHA256 = t.Branded<string, SHA256Brand>
```

Added in v1.0.0

## SHA256Brand (interface)

**Signature**

```ts
export interface SHA256Brand {
  readonly SHA256: unique symbol
}
```

Added in v1.0.0
