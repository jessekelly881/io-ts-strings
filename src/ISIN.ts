/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isISIN from "validator/lib/isISIN";

/**
 * @since 1.0.0
 */
export interface ISINBrand {
  readonly ISIN: unique symbol;
}

/**
 * @since 1.0.0
 */
export type ISIN = t.Branded<string, ISINBrand>;

/**
 * @since 1.0.0
 */
export const ISIN = t.brand(
  t.string,
  (s): s is ISIN => isISIN(s),
  "ISIN"
);


export default ISIN;
