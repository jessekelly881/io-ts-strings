---
title: PassportNumber.ts
nav_order: 38
parent: Modules
---

## PassportNumber overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [brands](#brands)
  - [PassportNumberBrand (interface)](#passportnumberbrand-interface)
  - [PassportNumberDEBrand (interface)](#passportnumberdebrand-interface)
  - [PassportNumberFRBrand (interface)](#passportnumberfrbrand-interface)
  - [PassportNumberUSBrand (interface)](#passportnumberusbrand-interface)
- [decoders](#decoders)
  - [passportDecoder](#passportdecoder)
- [types](#types)
  - [PassportNumber (type alias)](#passportnumber-type-alias)
  - [PassportNumberDE (type alias)](#passportnumberde-type-alias)
  - [PassportNumberFR (type alias)](#passportnumberfr-type-alias)
  - [PassportNumberUS (type alias)](#passportnumberus-type-alias)
- [utils](#utils)
  - [PassportNumber](#passportnumber)
  - [PassportNumberDE](#passportnumberde)
  - [PassportNumberFR](#passportnumberfr)
  - [PassportNumberUS](#passportnumberus)

---

# brands

## PassportNumberBrand (interface)

**Signature**

```ts
export interface PassportNumberBrand {
  readonly PassportNumber: unique symbol
}
```

Added in v1.0.0

## PassportNumberDEBrand (interface)

**Signature**

```ts
export interface PassportNumberDEBrand {
  readonly PassportNumberDE: unique symbol
}
```

Added in v1.0.0

## PassportNumberFRBrand (interface)

**Signature**

```ts
export interface PassportNumberFRBrand {
  readonly PassportNumberFR: unique symbol
}
```

Added in v1.0.0

## PassportNumberUSBrand (interface)

**Signature**

```ts
export interface PassportNumberUSBrand {
  readonly PassportNumberUS: unique symbol
}
```

Added in v1.0.0

# decoders

## passportDecoder

**Signature**

```ts
export declare const passportDecoder: <S extends string, B extends 'us' | 'fr' | 'de'>(
  locale: B
) => D.Decoder<S, string & t.Brand<PassportNumberBrand> & S & t.Brand<BrandMap[B]>>
```

Added in v1.1.0

# types

## PassportNumber (type alias)

**Signature**

```ts
export type PassportNumber = t.Branded<string, PassportNumberBrand>
```

Added in v1.0.0

## PassportNumberDE (type alias)

**Signature**

```ts
export type PassportNumberDE = t.Branded<string, PassportNumberDEBrand>
```

Added in v1.0.0

## PassportNumberFR (type alias)

**Signature**

```ts
export type PassportNumberFR = t.Branded<string, PassportNumberFRBrand>
```

Added in v1.0.0

## PassportNumberUS (type alias)

**Signature**

```ts
export type PassportNumberUS = t.Branded<string, PassportNumberUSBrand>
```

Added in v1.0.0

# utils

## PassportNumber

**Signature**

```ts
export declare const PassportNumber: t.BrandC<t.StringC, PassportNumberBrand>
```

Added in v1.0.0

## PassportNumberDE

**Signature**

```ts
export declare const PassportNumberDE: t.BrandC<t.StringC, PassportNumberDEBrand>
```

Added in v1.0.0

## PassportNumberFR

**Signature**

```ts
export declare const PassportNumberFR: t.BrandC<t.StringC, PassportNumberFRBrand>
```

Added in v1.0.0

## PassportNumberUS

**Signature**

```ts
export declare const PassportNumberUS: t.BrandC<t.StringC, PassportNumberUSBrand>
```

Added in v1.0.0
