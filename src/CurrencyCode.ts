import * as t from "io-ts";
import isISO4217 from "validator/lib/isISO4217";

/*
 * Currency Code
 *
 * I.e. USD
 */

interface CurrencyCodeBrand {
  readonly CurrencyCode: unique symbol;
}

type CurrencyCode = t.Branded<string, CurrencyCodeBrand>;

const CurrencyCode = t.brand(
  t.string,
  (s): s is CurrencyCode => isISO4217(s),
  "CurrencyCode"
);


export { CurrencyCode, CurrencyCodeBrand };
export default CurrencyCode;
