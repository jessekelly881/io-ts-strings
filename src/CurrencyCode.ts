/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isISO4217 from "validator/lib/isISO4217";

/**
 * @since 1.0.0
 */
export interface CurrencyCodeBrand {
  readonly CurrencyCode: unique symbol;
}

/**
 * @since 1.0.0
 */
export type CurrencyCode = t.Branded<string, CurrencyCodeBrand>;

/**
 * @since 1.0.0
 */
export const CurrencyCode = t.brand(
  t.string,
  (s): s is CurrencyCode => isISO4217(s),
  "CurrencyCode"
);


export default CurrencyCode;
