---
title: DataURI.ts
nav_order: 11
parent: Modules
---

## DataURI overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DataURI](#datauri)
  - [DataURI (type alias)](#datauri-type-alias)
  - [DataURIBrand (interface)](#datauribrand-interface)

---

# utils

## DataURI

**Signature**

```ts
export declare const DataURI: t.BrandC<t.StringC, DataURIBrand>
```

Added in v1.0.0

## DataURI (type alias)

**Signature**

```ts
export type DataURI = t.Branded<string, DataURIBrand>
```

Added in v1.0.0

## DataURIBrand (interface)

**Signature**

```ts
export interface DataURIBrand {
  readonly DataURI: unique symbol
}
```

Added in v1.0.0
