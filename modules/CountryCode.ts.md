---
title: CountryCode.ts
nav_order: 8
parent: Modules
---

## CountryCode overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [CountryCode](#countrycode)
  - [CountryCode (type alias)](#countrycode-type-alias)
  - [CountryCode2](#countrycode2)
  - [CountryCode2 (type alias)](#countrycode2-type-alias)
  - [CountryCode2Brand (interface)](#countrycode2brand-interface)
  - [CountryCode3](#countrycode3)
  - [CountryCode3 (type alias)](#countrycode3-type-alias)
  - [CountryCode3Brand (interface)](#countrycode3brand-interface)
  - [CountryCodeBrand (interface)](#countrycodebrand-interface)

---

# utils

## CountryCode

**Signature**

```ts
export declare const CountryCode: t.BrandC<t.StringC, CountryCodeBrand>
```

Added in v1.0.0

## CountryCode (type alias)

**Signature**

```ts
export type CountryCode = t.Branded<string, CountryCodeBrand>
```

Added in v1.0.0

## CountryCode2

2 character country code. I.e "US"

**Signature**

```ts
export declare const CountryCode2: t.BrandC<t.StringC, CountryCode2Brand>
```

Added in v1.0.0

## CountryCode2 (type alias)

**Signature**

```ts
export type CountryCode2 = t.Branded<string, CountryCode2Brand>
```

Added in v1.0.0

## CountryCode2Brand (interface)

**Signature**

```ts
export interface CountryCode2Brand {
  readonly CountryCode2: unique symbol
}
```

Added in v1.0.0

## CountryCode3

3 character country code. I.e "USA"

**Signature**

```ts
export declare const CountryCode3: t.BrandC<t.StringC, CountryCode3Brand>
```

Added in v1.0.0

## CountryCode3 (type alias)

**Signature**

```ts
export type CountryCode3 = t.Branded<string, CountryCode3Brand>
```

Added in v1.0.0

## CountryCode3Brand (interface)

**Signature**

```ts
export interface CountryCode3Brand {
  readonly CountryCode3: unique symbol
}
```

Added in v1.0.0

## CountryCodeBrand (interface)

**Signature**

```ts
export interface CountryCodeBrand {
  readonly CountryCode: unique symbol
}
```

Added in v1.0.0
