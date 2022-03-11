---
title: PassportNumber.ts
nav_order: 38
parent: Modules
---

## PassportNumber overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [PassportNumber](#passportnumber)
  - [PassportNumber (type alias)](#passportnumber-type-alias)
  - [PassportNumberBrand (interface)](#passportnumberbrand-interface)
  - [PassportNumberDE](#passportnumberde)
  - [PassportNumberDE (type alias)](#passportnumberde-type-alias)
  - [PassportNumberDEBrand (interface)](#passportnumberdebrand-interface)
  - [PassportNumberFR](#passportnumberfr)
  - [PassportNumberFR (type alias)](#passportnumberfr-type-alias)
  - [PassportNumberFRBrand (interface)](#passportnumberfrbrand-interface)
  - [PassportNumberUS](#passportnumberus)
  - [PassportNumberUS (type alias)](#passportnumberus-type-alias)
  - [PassportNumberUSBrand (interface)](#passportnumberusbrand-interface)

---

# utils

## PassportNumber

**Signature**

```ts
export declare const PassportNumber: t.BrandC<t.StringC, PassportNumberBrand>
```

Added in v1.0.0

## PassportNumber (type alias)

**Signature**

```ts
export type PassportNumber = t.Branded<string, PassportNumberBrand>
```

Added in v1.0.0

## PassportNumberBrand (interface)

**Signature**

```ts
export interface PassportNumberBrand {
  readonly PassportNumber: unique symbol
}
```

Added in v1.0.0

## PassportNumberDE

**Signature**

```ts
export declare const PassportNumberDE: t.BrandC<t.StringC, PassportNumberDEBrand>
```

Added in v1.0.0

## PassportNumberDE (type alias)

**Signature**

```ts
export type PassportNumberDE = t.Branded<string, PassportNumberDEBrand>
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

## PassportNumberFR

**Signature**

```ts
export declare const PassportNumberFR: t.BrandC<t.StringC, PassportNumberFRBrand>
```

Added in v1.0.0

## PassportNumberFR (type alias)

**Signature**

```ts
export type PassportNumberFR = t.Branded<string, PassportNumberFRBrand>
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

## PassportNumberUS

**Signature**

```ts
export declare const PassportNumberUS: t.BrandC<t.StringC, PassportNumberUSBrand>
```

Added in v1.0.0

## PassportNumberUS (type alias)

**Signature**

```ts
export type PassportNumberUS = t.Branded<string, PassportNumberUSBrand>
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
