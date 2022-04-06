/**
 * Value Added Tax Identification Number
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from 'io-ts/Decoder';
import isVAT from "validator/lib/isVAT";
import { pipe } from 'fp-ts/function';

/**
 * @since 1.0.0
 */
export interface VATGBBrand {
  readonly VATGB: unique symbol;
}

/**
 * @since 1.0.0
 */
export interface VATITBrand {
  readonly VATIT: unique symbol;
}

/**
 * @since 1.0.0
 */
export interface VATNLBrand {
  readonly VATNL: unique symbol;
}



/**
 * @categorty type
 * @since 1.0.0
 */
export type VATGB = t.Branded<string, VATGBBrand>;

/**
 * @categorty type
 * @since 1.0.0
 */
export type VATIT = t.Branded<string, VATITBrand>;

/**
 * @categorty type
 * @since 1.0.0
 */
export type VATNL = t.Branded<string, VATNLBrand>;



/**
 * @since 1.0.0
 */
export const VATGB = t.brand(t.string, (s): s is VATGB => isVAT(s, "GB"), "VATGB");

/**
 * @since 1.0.0
 */
export const VATIT = t.brand(t.string, (s): s is VATIT => isVAT(s, "IT"), "VATIT");

/**
 * @since 1.0.0
 */
export const VATNL = t.brand(t.string, (s): s is VATNL => isVAT(s, "NL"), "VATNL");



type BrandMap = {
  "GB": VATGB,
  "IT": VATIT,
  "NL": VATNL,
}

type Key = keyof BrandMap;

/**
 * @since 1.1.0
 */
export const vatDecoder = <S extends string, K extends Key>(key: Key): D.Decoder<S, t.Branded<S, BrandMap[K]>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, BrandMap[K]> => isVAT(x, key), "VAT")
)
