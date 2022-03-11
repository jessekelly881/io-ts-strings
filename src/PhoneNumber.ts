/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isMobilePhone from "validator/lib/isMobilePhone";


/**
 * @since 1.0.0
 */
export interface PhoneNumberBrand {
  readonly PhoneNumber: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PhoneNumber = t.Branded<string, PhoneNumberBrand>;

/**
 * @since 1.0.0
 */
export const PhoneNumber = t.brand(
  t.string,
  (s): s is PhoneNumber => isMobilePhone(s),
  "PhoneNumber"
);

/**
 * @since 1.0.0
 */
export interface PhoneNumberUSBrand {
  readonly PhoneNumberUS: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PhoneNumberUS = t.Branded<string, PhoneNumberUSBrand>;

/**
 * @since 1.0.0
 */
export const PhoneNumberUS = t.brand(
  t.string,
  (s): s is PhoneNumberUS => isMobilePhone(s, "en-US"),
  "PhoneNumberUS"
);

/**
 * @since 1.0.0
 */
export interface PhoneNumberFRBrand {
  readonly PhoneNumberFR: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PhoneNumberFR = t.Branded<string, PhoneNumberFRBrand>;

/**
 * @since 1.0.0
 */
export const PhoneNumberFR = t.brand(
  t.string,
  (s): s is PhoneNumberFR => isMobilePhone(s, "fr-FR"),
  "PhoneNumberFR"
);

/**
 * @since 1.0.0
 */
export interface PhoneNumberDEBrand {
  readonly PhoneNumberDE: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PhoneNumberDE = t.Branded<string, PhoneNumberDEBrand>;

/**
 * @since 1.0.0
 */
export const PhoneNumberDE = t.brand(
  t.string,
  (s): s is PhoneNumberDE => isMobilePhone(s, "de-DE"),
  "PhoneNumberDE"
);


export default PhoneNumber;
