/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isPassportNumber from "validator/lib/isPassportNumber";
import { pipe } from "fp-ts/function";



 /**
 * @category brands
 * @since 1.0.0
 */
export interface PassportNumberBrand {
  readonly PassportNumber: unique symbol;
}

/**
 * @category brands
 * @since 1.0.0
 */
export interface PassportNumberUSBrand {
  readonly PassportNumberUS: unique symbol;
}

/**
 * @category brands
 * @since 1.0.0
 */
export interface PassportNumberFRBrand {
  readonly PassportNumberFR: unique symbol;
}

/**
 * @category brands
 * @since 1.0.0
 */
export interface PassportNumberDEBrand {
  readonly PassportNumberDE: unique symbol;
}



/**
 * @category types
 * @since 1.0.0
 */
export type PassportNumber = t.Branded<string, PassportNumberBrand>;

/**
 * @category types
 * @since 1.0.0
 */
export type PassportNumberUS = t.Branded<string, PassportNumberUSBrand>;

/**
 * @category types
 * @since 1.0.0
 */
export type PassportNumberFR = t.Branded<string, PassportNumberFRBrand>;

/**
 * @category types
 * @since 1.0.0
 */
export type PassportNumberDE = t.Branded<string, PassportNumberDEBrand>;



/**
 * @since 1.0.0
 */
export const PassportNumber = t.brand(
  t.string,
  (s): s is PassportNumber => isPassportNumber(s),
  "PassportNumber"
);

/**
 * @since 1.0.0
 */
export const PassportNumberUS = t.brand(
  t.string,
  (s): s is PassportNumberUS => isPassportNumber(s, "US"),
  "PassportNumberUS"
);

/**
 * @since 1.0.0
 */
export const PassportNumberFR = t.brand(
  t.string,
  (s): s is PassportNumberFR => isPassportNumber(s, "FR"),
  "PassportNumberFR"
);

/**
 * @since 1.0.0
 */
export const PassportNumberDE = t.brand(
  t.string,
  (s): s is PassportNumberDE => isPassportNumber(s, "DE"),
  "PassportNumberDE"
);

type BrandMap = {
  "us": PassportNumberUSBrand,
  "fr": PassportNumberFRBrand,
  "de": PassportNumberDEBrand
}

type Locale = keyof BrandMap;



/**
 * @category decoders
 * @since 1.1.0
 */
export const passportDecoder = <S extends string, B extends Locale>(locale: B):
  D.Decoder<S, PassportNumber & t.Branded<S, BrandMap[B]>> => pipe(
    D.string,
    D.refine((x): x is PassportNumber & t.Branded<S, BrandMap[B]> => isPassportNumber(x, locale), "PassportNumber"))



export default PassportNumber;
