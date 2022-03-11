---
title: Email.ts
nav_order: 13
parent: Modules
---

## Email overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Email](#email)
  - [Email (type alias)](#email-type-alias)
  - [EmailBrand (interface)](#emailbrand-interface)

---

# utils

## Email

**Signature**

```ts
export declare const Email: t.BrandC<t.StringC, EmailBrand>
```

**Example**

```ts
import * as t from 'io-ts'
import { Email } from 'io-ts-strings'

const codec = t.interface({
  email: Email,
})

codec.decode({ email: 'john@b.com' }) // Right
codec.decode({ email: 'john.com' }) // Left
```

Added in v1.0.0

## Email (type alias)

**Signature**

```ts
export type Email = t.Branded<string, EmailBrand>
```

Added in v1.0.0

## EmailBrand (interface)

**Signature**

```ts
export interface EmailBrand {
  readonly Email: unique symbol
}
```

Added in v1.0.0
