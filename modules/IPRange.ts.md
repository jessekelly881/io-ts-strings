---
title: IPRange.ts
nav_order: 24
parent: Modules
---

## IPRange overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [IPRange](#iprange)
  - [IPRange (type alias)](#iprange-type-alias)
  - [IPRangeBrand (interface)](#iprangebrand-interface)
  - [IPv4Range](#ipv4range)
  - [IPv4Range (type alias)](#ipv4range-type-alias)
  - [IPv4RangeBrand (interface)](#ipv4rangebrand-interface)
  - [IPv6Range](#ipv6range)
  - [IPv6Range (type alias)](#ipv6range-type-alias)
  - [IPv6RangeBrand (interface)](#ipv6rangebrand-interface)

---

# utils

## IPRange

**Signature**

```ts
export declare const IPRange: t.BrandC<t.StringC, IPRangeBrand>
```

Added in v1.0.0

## IPRange (type alias)

**Signature**

```ts
export type IPRange = t.Branded<string, IPRangeBrand>
```

Added in v1.0.0

## IPRangeBrand (interface)

**Signature**

```ts
export interface IPRangeBrand {
  readonly IPRange: unique symbol
}
```

Added in v1.0.0

## IPv4Range

**Signature**

```ts
export declare const IPv4Range: t.BrandC<t.StringC, IPv4RangeBrand>
```

Added in v1.0.0

## IPv4Range (type alias)

**Signature**

```ts
export type IPv4Range = t.Branded<string, IPv4RangeBrand>
```

Added in v1.0.0

## IPv4RangeBrand (interface)

**Signature**

```ts
export interface IPv4RangeBrand {
  readonly IPv4Range: unique symbol
}
```

Added in v1.0.0

## IPv6Range

**Signature**

```ts
export declare const IPv6Range: t.BrandC<t.StringC, IPv6RangeBrand>
```

Added in v1.0.0

## IPv6Range (type alias)

**Signature**

```ts
export type IPv6Range = t.Branded<string, IPv6RangeBrand>
```

Added in v1.0.0

## IPv6RangeBrand (interface)

**Signature**

```ts
export interface IPv6RangeBrand {
  readonly IPv6Range: unique symbol
}
```

Added in v1.0.0
