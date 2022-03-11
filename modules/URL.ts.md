---
title: URL.ts
nav_order: 45
parent: Modules
---

## URL overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [URL](#url)
  - [URL (type alias)](#url-type-alias)
  - [URLBrand (interface)](#urlbrand-interface)

---

# utils

## URL

**Signature**

```ts
export declare const URL: t.BrandC<t.StringC, URLBrand>
```

Added in v1.0.0

## URL (type alias)

**Signature**

```ts
export type URL = t.Branded<string, URLBrand>
```

Added in v1.0.0

## URLBrand (interface)

**Signature**

```ts
export interface URLBrand {
  readonly URL: unique symbol
}
```

Added in v1.0.0
