---
title: HexColor.ts
nav_order: 18
parent: Modules
---

## HexColor overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [HexColor](#hexcolor)
  - [HexColor (type alias)](#hexcolor-type-alias)
  - [HexColorBrand (interface)](#hexcolorbrand-interface)

---

# utils

## HexColor

**Signature**

```ts
export declare const HexColor: t.BrandC<t.StringC, HexColorBrand>
```

Added in v1.0.0

## HexColor (type alias)

**Signature**

```ts
export type HexColor = t.Branded<string, HexColorBrand>
```

Added in v1.0.0

## HexColorBrand (interface)

**Signature**

```ts
export interface HexColorBrand {
  readonly HexColor: unique symbol
}
```

Added in v1.0.0
