import * as t from "io-ts";
import isIBAN from "validator/lib/isIBAN";

interface IBANBrand {
  readonly IBAN: unique symbol;
}

type IBAN = t.Branded<string, IBANBrand>;

const IBAN = t.brand(
  t.string,
  (s): s is IBAN => isIBAN(s),
  "IBAN"
);


export { IBAN, IBANBrand };
export default IBAN;
