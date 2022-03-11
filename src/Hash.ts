/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isHash from "validator/lib/isHash";


/**
 * @since 1.0.0
 */
export interface MD4Brand {
  readonly MD4: unique symbol;
}

/**
 * @since 1.0.0
 */
export type MD4 = t.Branded<string, MD4Brand>;

/**
 * @since 1.0.0
 */
export const MD4 = t.brand(
  t.string,
  (s): s is MD4 => isHash(s, "md4"),
  "MD4"
);

/**
 * @since 1.0.0
 */
export interface MD5Brand {
  readonly MD5: unique symbol;
}

/**
 * @since 1.0.0
 */
export type MD5 = t.Branded<string, MD5Brand>;

/**
 * @since 1.0.0
 */
export const MD5 = t.brand(
  t.string,
  (s): s is MD5 => isHash(s, "md5"),
  "MD5"
);

/**
 * @since 1.0.0
 */
export interface SHA1Brand {
  readonly SHA1: unique symbol;
}

/**
 * @since 1.0.0
 */
export type SHA1 = t.Branded<string, SHA1Brand>;

/**
 * @since 1.0.0
 */
export const SHA1 = t.brand(
  t.string,
  (s): s is SHA1 => isHash(s, "sha1"),
  "SHA1"
);

/**
 * @since 1.0.0
 */
export interface SHA256Brand {
  readonly SHA256: unique symbol;
}

/**
 * @since 1.0.0
 */
export type SHA256 = t.Branded<string, SHA256Brand>;

/**
 * @since 1.0.0
 */
export const SHA256 = t.brand(
  t.string,
  (s): s is SHA256 => isHash(s, "sha1"),
  "SHA256"
);
