---
title: EthereumAddress.ts
nav_order: 15
parent: Modules
---

## EthereumAddress overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [EthereumAddress](#ethereumaddress)
  - [EthereumAddress (type alias)](#ethereumaddress-type-alias)
  - [EthereumAddressBrand (interface)](#ethereumaddressbrand-interface)

---

# utils

## EthereumAddress

**Signature**

```ts
export declare const EthereumAddress: t.BrandC<t.StringC, EthereumAddressBrand>
```

Added in v1.0.0

## EthereumAddress (type alias)

**Signature**

```ts
export type EthereumAddress = t.Branded<string, EthereumAddressBrand>
```

Added in v1.0.0

## EthereumAddressBrand (interface)

**Signature**

```ts
export interface EthereumAddressBrand {
  readonly EthereumAddress: unique symbol
}
```

Added in v1.0.0
