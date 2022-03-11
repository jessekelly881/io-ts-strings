---
title: PhoneNumber.ts
nav_order: 39
parent: Modules
---

## PhoneNumber overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [PhoneNumber](#phonenumber)
  - [PhoneNumber (type alias)](#phonenumber-type-alias)
  - [PhoneNumberBrand (interface)](#phonenumberbrand-interface)
  - [PhoneNumberDE](#phonenumberde)
  - [PhoneNumberDE (type alias)](#phonenumberde-type-alias)
  - [PhoneNumberDEBrand (interface)](#phonenumberdebrand-interface)
  - [PhoneNumberFR](#phonenumberfr)
  - [PhoneNumberFR (type alias)](#phonenumberfr-type-alias)
  - [PhoneNumberFRBrand (interface)](#phonenumberfrbrand-interface)
  - [PhoneNumberUS](#phonenumberus)
  - [PhoneNumberUS (type alias)](#phonenumberus-type-alias)
  - [PhoneNumberUSBrand (interface)](#phonenumberusbrand-interface)

---

# utils

## PhoneNumber

**Signature**

```ts
export declare const PhoneNumber: t.BrandC<t.StringC, PhoneNumberBrand>
```

Added in v1.0.0

## PhoneNumber (type alias)

**Signature**

```ts
export type PhoneNumber = t.Branded<string, PhoneNumberBrand>
```

Added in v1.0.0

## PhoneNumberBrand (interface)

**Signature**

```ts
export interface PhoneNumberBrand {
  readonly PhoneNumber: unique symbol
}
```

Added in v1.0.0

## PhoneNumberDE

**Signature**

```ts
export declare const PhoneNumberDE: t.BrandC<t.StringC, PhoneNumberDEBrand>
```

Added in v1.0.0

## PhoneNumberDE (type alias)

**Signature**

```ts
export type PhoneNumberDE = t.Branded<string, PhoneNumberDEBrand>
```

Added in v1.0.0

## PhoneNumberDEBrand (interface)

**Signature**

```ts
export interface PhoneNumberDEBrand {
  readonly PhoneNumberDE: unique symbol
}
```

Added in v1.0.0

## PhoneNumberFR

**Signature**

```ts
export declare const PhoneNumberFR: t.BrandC<t.StringC, PhoneNumberFRBrand>
```

Added in v1.0.0

## PhoneNumberFR (type alias)

**Signature**

```ts
export type PhoneNumberFR = t.Branded<string, PhoneNumberFRBrand>
```

Added in v1.0.0

## PhoneNumberFRBrand (interface)

**Signature**

```ts
export interface PhoneNumberFRBrand {
  readonly PhoneNumberFR: unique symbol
}
```

Added in v1.0.0

## PhoneNumberUS

**Signature**

```ts
export declare const PhoneNumberUS: t.BrandC<t.StringC, PhoneNumberUSBrand>
```

Added in v1.0.0

## PhoneNumberUS (type alias)

**Signature**

```ts
export type PhoneNumberUS = t.Branded<string, PhoneNumberUSBrand>
```

Added in v1.0.0

## PhoneNumberUSBrand (interface)

**Signature**

```ts
export interface PhoneNumberUSBrand {
  readonly PhoneNumberUS: unique symbol
}
```

Added in v1.0.0
