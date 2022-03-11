---
title: SVG.ts
nav_order: 44
parent: Modules
---

## SVG overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SVG](#svg)
  - [SVG (type alias)](#svg-type-alias)
  - [SVGBrand (interface)](#svgbrand-interface)

---

# utils

## SVG

**Signature**

```ts
export declare const SVG: t.BrandC<t.StringC, SVGBrand>
```

Added in v1.0.0

## SVG (type alias)

**Signature**

```ts
export type SVG = t.Branded<string, SVGBrand>
```

Added in v1.0.0

## SVGBrand (interface)

**Signature**

```ts
export interface SVGBrand {
  readonly SVG: unique symbol
}
```

Added in v1.0.0
