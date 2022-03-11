---
title: UUID.ts
nav_order: 47
parent: Modules
---

## UUID overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [UUID](#uuid)
  - [UUID (type alias)](#uuid-type-alias)
  - [UUIDBrand (interface)](#uuidbrand-interface)
  - [UUIDv3](#uuidv3)
  - [UUIDv3 (type alias)](#uuidv3-type-alias)
  - [UUIDv3Brand (interface)](#uuidv3brand-interface)
  - [UUIDv4](#uuidv4)
  - [UUIDv4 (type alias)](#uuidv4-type-alias)
  - [UUIDv4Brand (interface)](#uuidv4brand-interface)
  - [UUIDv5](#uuidv5)
  - [UUIDv5 (type alias)](#uuidv5-type-alias)
  - [UUIDv5Brand (interface)](#uuidv5brand-interface)

---

# utils

## UUID

**Signature**

```ts
export declare const UUID: t.BrandC<t.StringC, UUIDBrand>
```

Added in v1.0.0

## UUID (type alias)

**Signature**

```ts
export type UUID = t.Branded<string, UUIDBrand>
```

Added in v1.0.0

## UUIDBrand (interface)

**Signature**

```ts
export interface UUIDBrand {
  readonly UUID: unique symbol
}
```

Added in v1.0.0

## UUIDv3

**Signature**

```ts
export declare const UUIDv3: t.BrandC<t.StringC, UUIDv3Brand>
```

Added in v1.0.0

## UUIDv3 (type alias)

**Signature**

```ts
export type UUIDv3 = t.Branded<string, UUIDv3Brand>
```

Added in v1.0.0

## UUIDv3Brand (interface)

**Signature**

```ts
export interface UUIDv3Brand {
  readonly UUIDv3: unique symbol
}
```

Added in v1.0.0

## UUIDv4

**Signature**

```ts
export declare const UUIDv4: t.BrandC<t.StringC, UUIDv4Brand>
```

Added in v1.0.0

## UUIDv4 (type alias)

**Signature**

```ts
export type UUIDv4 = t.Branded<string, UUIDv4Brand>
```

Added in v1.0.0

## UUIDv4Brand (interface)

**Signature**

```ts
export interface UUIDv4Brand {
  readonly UUIDv4: unique symbol
}
```

Added in v1.0.0

## UUIDv5

**Signature**

```ts
export declare const UUIDv5: t.BrandC<t.StringC, UUIDv5Brand>
```

Added in v1.0.0

## UUIDv5 (type alias)

**Signature**

```ts
export type UUIDv5 = t.Branded<string, UUIDv5Brand>
```

Added in v1.0.0

## UUIDv5Brand (interface)

**Signature**

```ts
export interface UUIDv5Brand {
  readonly UUIDv5: unique symbol
}
```

Added in v1.0.0
