import * as t from "io-ts";
import isPassportNumber from "validator/lib/isPassportNumber";


/*
 * Any Country
 */

export interface PassportNumberBrand {
  readonly PassportNumber: unique symbol;
}

export type PassportNumber = t.Branded<string, PassportNumberBrand>;

export const PassportNumber = t.brand(
  t.string,
  (s): s is PassportNumber => isPassportNumber(s),
  "PassportNumber"
);


/*
 * United States
 */

export interface PassportNumberUSBrand {
  readonly PassportNumberUS: unique symbol;
}

export type PassportNumberUS = t.Branded<string, PassportNumberUSBrand>;

export const PassportNumberUS = t.brand(
  t.string,
  (s): s is PassportNumberUS => isPassportNumber(s, "US"),
  "PassportNumberUS"
);


/*
 * France
 */

export interface PassportNumberFRBrand {
  readonly PassportNumberFR: unique symbol;
}

export type PassportNumberFR = t.Branded<string, PassportNumberFRBrand>;

export const PassportNumberFR = t.brand(
  t.string,
  (s): s is PassportNumberFR => isPassportNumber(s),
  "PassportNumberFR"
);


/*
 * Germany
 */

export interface PassportNumberDEBrand {
  readonly PassportNumberDE: unique symbol;
}

export type PassportNumberDE = t.Branded<string, PassportNumberDEBrand>;

export const PassportNumberDE = t.brand(
  t.string,
  (s): s is PassportNumberDE => isPassportNumber(s, "DE"),
  "PassportNumberDE"
);
