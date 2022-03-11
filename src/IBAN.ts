/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isIBAN from "validator/lib/isIBAN";

/**
 * @since 1.0.0
 */
export interface IBANBrand {
  readonly IBAN: unique symbol;
}

/**
 * @since 1.0.0
 */
export type IBAN = t.Branded<string, IBANBrand>;

/**
 * @since 1.0.0
 */
export const IBAN = t.brand(
  t.string,
  (s): s is IBAN => isIBAN(s),
  "IBAN"
);


export default IBAN;
