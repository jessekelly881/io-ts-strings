import * as t from "io-ts";
import isUUID from "validator/lib/isUUID";

/*
 * Any UUID Version
 */

export interface UUIDBrand {
  readonly UUID: unique symbol;
}

export type UUID = t.Branded<string, UUIDBrand>;

export const UUID = t.brand(
  t.string,
  (s): s is UUID => isUUID(s),
  "UUID"
);


/*
 * UUID v3
 */

export interface UUIDv3Brand {
  readonly UUIDv3: unique symbol;
}

export type UUIDv3 = t.Branded<string, UUIDv3Brand>;

export const UUIDv3 = t.brand(
  t.string,
  (s): s is UUIDv3 => isUUID(s, "3"),
  "UUIDv3"
);


/*
 * UUID v4
 */

export interface UUIDv4Brand {
  readonly UUIDv4: unique symbol;
}

export type UUIDv4 = t.Branded<string, UUIDv4Brand>;

export const UUIDv4 = t.brand(
  t.string,
  (s): s is UUIDv4 => isUUID(s, "4"),
  "UUIDv4"
);


/*
 * UUID v5
 */

export interface UUIDv5Brand {
  readonly UUIDv5: unique symbol;
}

export type UUIDv5 = t.Branded<string, UUIDv5Brand>;

export const UUIDv5 = t.brand(
  t.string,
  (s): s is UUIDv5 => isUUID(s, "5"),
  "UUIDv5"
);
