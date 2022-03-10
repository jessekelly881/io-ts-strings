import * as t from "io-ts";
import isMobilePhone from "validator/lib/isMobilePhone";


/*
 * Any Country
 */

export interface PhoneNumberBrand {
  readonly PhoneNumber: unique symbol;
}

export type PhoneNumber = t.Branded<string, PhoneNumberBrand>;

export const PhoneNumber = t.brand(
  t.string,
  (s): s is PhoneNumber => isMobilePhone(s),
  "PhoneNumber"
);


/*
 * United States
 */

export interface PhoneNumberUSBrand {
  readonly PhoneNumberUS: unique symbol;
}

export type PhoneNumberUS = t.Branded<string, PhoneNumberUSBrand>;

export const PhoneNumberUS = t.brand(
  t.string,
  (s): s is PhoneNumberUS => isMobilePhone(s, "en-US"),
  "PhoneNumberUS"
);


/*
 * France
 */

export interface PhoneNumberFRBrand {
  readonly PhoneNumberFR: unique symbol;
}

export type PhoneNumberFR = t.Branded<string, PhoneNumberFRBrand>;

export const PhoneNumberFR = t.brand(
  t.string,
  (s): s is PhoneNumberFR => isMobilePhone(s, "fr-FR"),
  "PhoneNumberFR"
);


/*
 * Germany
 */

export interface PhoneNumberDEBrand {
  readonly PhoneNumberDE: unique symbol;
}

export type PhoneNumberDE = t.Branded<string, PhoneNumberDEBrand>;

export const PhoneNumberDE = t.brand(
  t.string,
  (s): s is PhoneNumberDE => isMobilePhone(s, "de-DE"),
  "PhoneNumberDE"
);
