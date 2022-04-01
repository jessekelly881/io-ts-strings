/**
 * @since 1.0.0
 */
import { pipe } from "fp-ts/function";
import * as t from "io-ts";
import * as D from 'io-ts/Decoder';
import isBase32 from "validator/lib/isBase32";
import isBase58 from "validator/lib/isBase58";
import isBase64 from "validator/lib/isBase64";


/**
 * @since 1.0.0
 */
export interface Base32Brand {
  readonly Base32: unique symbol;
}

/**
 * @since 1.0.0
 */
export interface Base58Brand {
  readonly Base58: unique symbol;
}

/**
 * @since 1.0.0
 */
export interface Base64Brand {
  readonly Base64: unique symbol;
}



/**
 * @since 1.0.0
 */
export type Base32 = t.Branded<string, Base32Brand>;

/**
 * @since 1.0.0
 */
export type Base58 = t.Branded<string, Base58Brand>;

/**
 * @since 1.0.0
 */
export type Base64 = t.Branded<string, Base64Brand>;



/**
 * @since 1.0.0
 */
export const Base32 = t.brand(t.string, (s): s is Base32 => isBase32(s), "Base32");

/**
 * @since 1.0.0
 */
export const Base58 = t.brand(t.string, (s): s is Base58 => isBase58(s), "Base58");

/**
 * @since 1.0.0
 */
export const Base64 = t.brand(t.string, (s): s is Base64 => isBase64(s), "Base64");


type BrandMap = {
  "32": Base32Brand,
  "58": Base58Brand,
  "64": Base64Brand
}

type BrandCode = keyof BrandMap;

const isBrand = (b: BrandCode) => ({
  "32": isBase32,
  "58": isBase58,
  "64": isBase64
})[b]


/**
 * @since 1.1.0
 */
export const baseDecoder = <S extends string, B extends BrandCode = "32">(brand: B = "32" as B):
  D.Decoder<S, t.Branded<S, BrandMap[B]>> => pipe(
    D.string,
    D.refine((x): x is t.Branded<S, BrandMap[B]> => isBrand(brand)(x), "Ascii")
  )


export default Base32;
