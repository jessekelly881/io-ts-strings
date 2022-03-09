import * as t from "io-ts";
import isIBAN from "validator/lib/isIBAN";

export interface IBANBrand {
  readonly IBAN: unique symbol;
}

export type IBAN = t.Branded<string, IBANBrand>;

export const IBAN = t.brand(
  t.string,
  (s): s is IBAN => isIBAN(s),
  "IBAN"
);
