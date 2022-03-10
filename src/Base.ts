import * as t from "io-ts";
import isBase32 from "validator/lib/isBase32";
import isBase58 from "validator/lib/isBase58";
import isBase64 from "validator/lib/isBase64";

/*
 * Base 32 Encoded
 */

export interface Base32Brand {
  readonly Base32: unique symbol;
}

export type Base32 = t.Branded<string, Base32Brand>;
export const Base32 = t.brand(t.string, (s): s is Base32 => isBase32(s), "Base32");


/*
 * Base 58 Encoded
 */

export interface Base58Brand {
  readonly Base58: unique symbol;
}

export type Base58 = t.Branded<string, Base58Brand>;
export const Base58 = t.brand(t.string, (s): s is Base58 => isBase58(s), "Base58");


/*
 * Base 64 Encoded
 */

export interface Base64Brand {
  readonly Base64: unique symbol;
}

export type Base64 = t.Branded<string, Base64Brand>;
export const Base64 = t.brand(t.string, (s): s is Base64 => isBase64(s), "Base64");
