import * as t from "io-ts";
import isISO4217 from "validator/lib/isISO4217";

/*
 * Currency Code
 *
 * I.e. USD
 */

export interface CurrencyCodeBrand {
  readonly CurrencyCode: unique symbol;
}

export type CurrencyCode = t.Branded<string, CurrencyCodeBrand>;
export const CurrencyCode = t.brand(
  t.string,
  (s): s is CurrencyCode => isISO4217(s),
  "CurrencyCode"
);
