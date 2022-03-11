---
title: IP.ts
nav_order: 23
parent: Modules
---

## IP overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [IP](#ip)
  - [IP (type alias)](#ip-type-alias)
  - [IPBrand (interface)](#ipbrand-interface)
  - [IPv4](#ipv4)
  - [IPv4 (type alias)](#ipv4-type-alias)
  - [IPv4Brand (interface)](#ipv4brand-interface)
  - [IPv6](#ipv6)
  - [IPv6 (type alias)](#ipv6-type-alias)
  - [IPv6Brand (interface)](#ipv6brand-interface)

---

# utils

## IP

**Signature**

```ts
export declare const IP: t.BrandC<t.StringC, IPBrand>
```

Added in v1.0.0

## IP (type alias)

**Signature**

```ts
export type IP = t.Branded<string, IPBrand>
```

Added in v1.0.0

## IPBrand (interface)

**Signature**

```ts
export interface IPBrand {
  readonly IP: unique symbol
}
```

Added in v1.0.0

## IPv4

**Signature**

```ts
export declare const IPv4: t.BrandC<t.StringC, IPv4Brand>
```

Added in v1.0.0

## IPv4 (type alias)

**Signature**

```ts
export type IPv4 = t.Branded<string, IPv4Brand>
```

Added in v1.0.0

## IPv4Brand (interface)

**Signature**

```ts
export interface IPv4Brand {
  readonly IPv4: unique symbol
}
```

Added in v1.0.0

## IPv6

**Signature**

```ts
export declare const IPv6: t.BrandC<t.StringC, IPv6Brand>
```

Added in v1.0.0

## IPv6 (type alias)

**Signature**

```ts
export type IPv6 = t.Branded<string, IPv6Brand>
```

Added in v1.0.0

## IPv6Brand (interface)

**Signature**

```ts
export interface IPv6Brand {
  readonly IPv6: unique symbol
}
```

Added in v1.0.0
