---
title: BitcoinAddress.ts
nav_order: 6
parent: Modules
---

## BitcoinAddress overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [BitcoinAddress](#bitcoinaddress)
  - [BitcoinAddress (type alias)](#bitcoinaddress-type-alias)
  - [BitcoinAddressBrand (interface)](#bitcoinaddressbrand-interface)

---

# utils

## BitcoinAddress

**Signature**

```ts
export declare const BitcoinAddress: t.BrandC<t.StringC, BitcoinAddressBrand>
```

Added in v1.0.0

## BitcoinAddress (type alias)

**Signature**

```ts
export type BitcoinAddress = t.Branded<string, BitcoinAddressBrand>
```

Added in v1.0.0

## BitcoinAddressBrand (interface)

**Signature**

```ts
export interface BitcoinAddressBrand {
  readonly BitcoinAddress: unique symbol
}
```

Added in v1.0.0
