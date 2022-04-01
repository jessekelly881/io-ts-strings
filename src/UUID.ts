/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isUUID from "validator/lib/isUUID";


/**
 * @since 1.0.0
 */
export interface UUIDBrand {
  readonly UUID: unique symbol;
}

/**
 * @since 1.0.0
 */
export type UUID = t.Branded<string, UUIDBrand>;

/**
 * @since 1.0.0
 */
export const UUID = t.brand(
  t.string,
  (s): s is UUID => isUUID(s),
  "UUID"
);

/**
 * @since 1.0.0
 */
export interface UUIDv3Brand {
  readonly UUIDv3: unique symbol;
}

/**
 * @since 1.0.0
 */
export type UUIDv3 = t.Branded<string, UUIDv3Brand>;

/**
 * @since 1.0.0
 */
export const UUIDv3 = t.brand(
  t.string,
  (s): s is UUIDv3 => isUUID(s, "3"),
  "UUIDv3"
);

/**
 * @since 1.0.0
 */
export interface UUIDv4Brand {
  readonly UUIDv4: unique symbol;
}

/**
 * @since 1.0.0
 */
export type UUIDv4 = t.Branded<string, UUIDv4Brand>;

/**
 * @since 1.0.0
 */
export const UUIDv4 = t.brand(
  t.string,
  (s): s is UUIDv4 => isUUID(s, "4"),
  "UUIDv4"
);

/**
 * @since 1.0.0
 */
export interface UUIDv5Brand {
  readonly UUIDv5: unique symbol;
}

/**
 * @since 1.0.0
 */
export type UUIDv5 = t.Branded<string, UUIDv5Brand>;

/**
 * @since 1.0.0
 */
export const UUIDv5 = t.brand(
  t.string,
  (s): s is UUIDv5 => isUUID(s, "5"),
  "UUIDv5"
);


export default UUID;
