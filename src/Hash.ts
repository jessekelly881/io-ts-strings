/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isHash from "validator/lib/isHash";
import { pipe } from 'fp-ts/function';



/**
 * @category types
 * @since 1.0.0
 */
export interface MD4Brand {
  readonly MD4: unique symbol;
}

/**
 * @category types
 * @since 1.0.0
 */
export interface MD5Brand {
  readonly MD5: unique symbol;
}

/**
 * @category types
 * @since 1.0.0
 */
export interface SHA1Brand {
  readonly SHA1: unique symbol;
}

/**
 * @category types
 * @since 1.0.0
 */
export interface SHA256Brand {
  readonly SHA256: unique symbol;
}



/**
 * @category types
 * @since 1.0.0
 */
export type MD4 = t.Branded<string, MD4Brand>;

/**
 * @category types
 * @since 1.0.0
 */
export type MD5 = t.Branded<string, MD5Brand>;

/**
 * @category types
 * @since 1.0.0
 */
export type SHA1 = t.Branded<string, SHA1Brand>;

/**
 * @category types
 * @since 1.0.0
 */
export type SHA256 = t.Branded<string, SHA256Brand>;



/**
 * @category brands
 * @since 1.0.0
 */
export const MD4 = t.brand(
  t.string,
  (s): s is MD4 => isHash(s, "md4"),
  "MD4"
);

/**
 * @category brands
 * @since 1.0.0
 */
export const MD5 = t.brand(
  t.string,
  (s): s is MD5 => isHash(s, "md5"),
  "MD5"
);

/**
 * @category brands
 * @since 1.0.0
 */
export const SHA1 = t.brand(
  t.string,
  (s): s is SHA1 => isHash(s, "sha1"),
  "SHA1"
);

/**
 * @category brands
 * @since 1.0.0
 */
export const SHA256 = t.brand(
  t.string,
  (s): s is SHA256 => isHash(s, "sha1"),
  "SHA256"
);


type BrandMap = {
  "md4": MD4Brand,
  "md5": MD5Brand,
  "sha1": SHA1Brand,
  "sha256": SHA256Brand
}

type HashType = keyof BrandMap;


/**
 * @category decoders
 * @since 1.1.0
 */
export const hashDecoder = <S extends string, B extends HashType>(hash: B):
  D.Decoder<S, t.Branded<S, BrandMap[B]>> => pipe(
    D.string,
    D.refine((x): x is t.Branded<S, BrandMap[B]> => isHash(x, hash), "Hash"))
