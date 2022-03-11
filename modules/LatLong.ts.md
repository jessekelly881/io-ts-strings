---
title: LatLong.ts
nav_order: 29
parent: Modules
---

## LatLong overview

A valid latlong string in the format "lat,long" or "lat, long"

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [LatLong](#latlong)
  - [LatLong (type alias)](#latlong-type-alias)
  - [LatLongBrand (interface)](#latlongbrand-interface)

---

# utils

## LatLong

**Signature**

```ts
export declare const LatLong: t.BrandC<t.StringC, LatLongBrand>
```

Added in v1.0.0

## LatLong (type alias)

**Signature**

```ts
export type LatLong = t.Branded<string, LatLongBrand>
```

Added in v1.0.0

## LatLongBrand (interface)

**Signature**

```ts
export interface LatLongBrand {
  readonly LatLong: unique symbol
}
```

Added in v1.0.0
