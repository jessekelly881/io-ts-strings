---
title: PostalCode.ts
nav_order: 41
parent: Modules
---

## PostalCode overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [PostalCode](#postalcode)
  - [PostalCode (type alias)](#postalcode-type-alias)
  - [PostalCodeBrand (interface)](#postalcodebrand-interface)
  - [PostalCodeDE](#postalcodede)
  - [PostalCodeDE (type alias)](#postalcodede-type-alias)
  - [PostalCodeDEBrand (interface)](#postalcodedebrand-interface)
  - [PostalCodeFR](#postalcodefr)
  - [PostalCodeFR (type alias)](#postalcodefr-type-alias)
  - [PostalCodeFRBrand (interface)](#postalcodefrbrand-interface)
  - [PostalCodeUS](#postalcodeus)
  - [PostalCodeUS (type alias)](#postalcodeus-type-alias)
  - [PostalCodeUSBrand (interface)](#postalcodeusbrand-interface)

---

# utils

## PostalCode

**Signature**

```ts
export declare const PostalCode: t.BrandC<t.StringC, PostalCodeBrand>
```

Added in v1.0.0

## PostalCode (type alias)

**Signature**

```ts
export type PostalCode = t.Branded<string, PostalCodeBrand>
```

Added in v1.0.0

## PostalCodeBrand (interface)

**Signature**

```ts
export interface PostalCodeBrand {
  readonly PostalCode: unique symbol
}
```

Added in v1.0.0

## PostalCodeDE

**Signature**

```ts
export declare const PostalCodeDE: t.BrandC<t.StringC, PostalCodeDEBrand>
```

Added in v1.0.0

## PostalCodeDE (type alias)

**Signature**

```ts
export type PostalCodeDE = t.Branded<string, PostalCodeDEBrand>
```

Added in v1.0.0

## PostalCodeDEBrand (interface)

**Signature**

```ts
export interface PostalCodeDEBrand {
  readonly PostalCodeDE: unique symbol
}
```

Added in v1.0.0

## PostalCodeFR

**Signature**

```ts
export declare const PostalCodeFR: t.BrandC<t.StringC, PostalCodeFRBrand>
```

Added in v1.0.0

## PostalCodeFR (type alias)

**Signature**

```ts
export type PostalCodeFR = t.Branded<string, PostalCodeFRBrand>
```

Added in v1.0.0

## PostalCodeFRBrand (interface)

**Signature**

```ts
export interface PostalCodeFRBrand {
  readonly PostalCodeFR: unique symbol
}
```

Added in v1.0.0

## PostalCodeUS

**Signature**

```ts
export declare const PostalCodeUS: t.BrandC<t.StringC, PostalCodeUSBrand>
```

Added in v1.0.0

## PostalCodeUS (type alias)

**Signature**

```ts
export type PostalCodeUS = t.Branded<string, PostalCodeUSBrand>
```

Added in v1.0.0

## PostalCodeUSBrand (interface)

**Signature**

```ts
export interface PostalCodeUSBrand {
  readonly PostalCodeUS: unique symbol
}
```

Added in v1.0.0
