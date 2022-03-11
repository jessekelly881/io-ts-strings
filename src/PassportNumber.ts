/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isPassportNumber from "validator/lib/isPassportNumber";


 /**
 * @since 1.0.0
 */
export interface PassportNumberBrand {
  readonly PassportNumber: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PassportNumber = t.Branded<string, PassportNumberBrand>;

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
export interface PassportNumberUSBrand {
  readonly PassportNumberUS: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PassportNumberUS = t.Branded<string, PassportNumberUSBrand>;

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
export interface PassportNumberFRBrand {
  readonly PassportNumberFR: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PassportNumberFR = t.Branded<string, PassportNumberFRBrand>;

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
export interface PassportNumberDEBrand {
  readonly PassportNumberDE: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PassportNumberDE = t.Branded<string, PassportNumberDEBrand>;

/**
 * @since 1.0.0
 */
export const PassportNumberDE = t.brand(
  t.string,
  (s): s is PassportNumberDE => isPassportNumber(s, "DE"),
  "PassportNumberDE"
);


export default PassportNumber;
