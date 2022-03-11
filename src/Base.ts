/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isBase32 from "validator/lib/isBase32";
import isBase58 from "validator/lib/isBase58";
import isBase64 from "validator/lib/isBase64";

/*
 * Base 32 Encoded
 */

/**
 * @since 1.0.0
 */
export interface Base32Brand {
  readonly Base32: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Base32 = t.Branded<string, Base32Brand>;

/**
 * @since 1.0.0
 */
export const Base32 = t.brand(t.string, (s): s is Base32 => isBase32(s), "Base32");


/*
 * Base 58 Encoded
 */

/**
 * @since 1.0.0
 */
export interface Base58Brand {
  readonly Base58: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Base58 = t.Branded<string, Base58Brand>;

/**
 * @since 1.0.0
 */
export const Base58 = t.brand(t.string, (s): s is Base58 => isBase58(s), "Base58");


/*
 * Base 64 Encoded
 */

/**
 * @since 1.0.0
 */
export interface Base64Brand {
  readonly Base64: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Base64 = t.Branded<string, Base64Brand>;

/**
 * @since 1.0.0
 */
export const Base64 = t.brand(t.string, (s): s is Base64 => isBase64(s), "Base64");


export default Base32;
