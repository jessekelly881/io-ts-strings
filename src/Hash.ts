import * as t from "io-ts";
import isHash from "validator/lib/isHash";

/*
 * MD4
 */

export interface MD4Brand {
  readonly MD4: unique symbol;
}

export type MD4 = t.Branded<string, MD4Brand>;

export const MD4 = t.brand(
  t.string,
  (s): s is MD4 => isHash(s, "md4"),
  "MD4"
);


/*
 * MD5
 */

export interface MD5Brand {
  readonly MD5: unique symbol;
}

export type MD5 = t.Branded<string, MD5Brand>;

export const MD5 = t.brand(
  t.string,
  (s): s is MD5 => isHash(s, "md5"),
  "MD5"
);


/*
 * SHA1
 */

export interface SHA1Brand {
  readonly SHA1: unique symbol;
}

export type SHA1 = t.Branded<string, SHA1Brand>;

export const SHA1 = t.brand(
  t.string,
  (s): s is SHA1 => isHash(s, "sha1"),
  "SHA1"
);


/*
 * SHA256
 */

export interface SHA256Brand {
  readonly SHA256: unique symbol;
}

export type SHA256 = t.Branded<string, SHA256Brand>;

export const SHA256 = t.brand(
  t.string,
  (s): s is SHA256 => isHash(s, "sha1"),
  "SHA256"
);
