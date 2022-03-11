---
title: HostName.ts
nav_order: 19
parent: Modules
---

## HostName overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [HostName](#hostname)
  - [HostName (type alias)](#hostname-type-alias)
  - [HostNameBrand (interface)](#hostnamebrand-interface)

---

# utils

## HostName

**Signature**

```ts
export declare const HostName: t.BrandC<t.StringC, HostNameBrand>
```

Added in v1.0.0

## HostName (type alias)

**Signature**

```ts
export type HostName = t.Branded<string, HostNameBrand>
```

Added in v1.0.0

## HostNameBrand (interface)

**Signature**

```ts
export interface HostNameBrand {
  readonly HostName: unique symbol
}
```

Added in v1.0.0
