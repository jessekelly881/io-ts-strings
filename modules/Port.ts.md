---
title: Port.ts
nav_order: 40
parent: Modules
---

## Port overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Port](#port)
  - [Port (type alias)](#port-type-alias)
  - [PortBrand (interface)](#portbrand-interface)

---

# utils

## Port

**Signature**

```ts
export declare const Port: t.BrandC<t.StringC, PortBrand>
```

Added in v1.0.0

## Port (type alias)

**Signature**

```ts
export type Port = t.Branded<string, PortBrand>
```

Added in v1.0.0

## PortBrand (interface)

**Signature**

```ts
export interface PortBrand {
  readonly Port: unique symbol
}
```

Added in v1.0.0
