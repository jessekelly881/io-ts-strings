---
title: MongoID.ts
nav_order: 34
parent: Modules
---

## MongoID overview

MongoDB Object ID

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [MongoID](#mongoid)
  - [MongoID (type alias)](#mongoid-type-alias)
  - [MongoIDBrand (interface)](#mongoidbrand-interface)

---

# utils

## MongoID

**Signature**

```ts
export declare const MongoID: t.BrandC<t.StringC, MongoIDBrand>
```

Added in v1.0.0

## MongoID (type alias)

**Signature**

```ts
export type MongoID = t.Branded<string, MongoIDBrand>
```

Added in v1.0.0

## MongoIDBrand (interface)

**Signature**

```ts
export interface MongoIDBrand {
  readonly MongoID: unique symbol
}
```

Added in v1.0.0
