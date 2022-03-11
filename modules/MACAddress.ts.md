---
title: MACAddress.ts
nav_order: 32
parent: Modules
---

## MACAddress overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [MACAddress](#macaddress)
  - [MACAddress (type alias)](#macaddress-type-alias)
  - [MACAddressBrand (interface)](#macaddressbrand-interface)

---

# utils

## MACAddress

**Signature**

```ts
export declare const MACAddress: t.BrandC<t.StringC, MACAddressBrand>
```

Added in v1.0.0

## MACAddress (type alias)

**Signature**

```ts
export type MACAddress = t.Branded<string, MACAddressBrand>
```

Added in v1.0.0

## MACAddressBrand (interface)

**Signature**

```ts
export interface MACAddressBrand {
  readonly MACAddress: unique symbol
}
```

Added in v1.0.0
