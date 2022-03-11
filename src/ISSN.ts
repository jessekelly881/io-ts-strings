/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isISSN from "validator/lib/isISSN";

/**
 * @since 1.0.0
 */
export interface ISSNBrand {
  readonly ISSN: unique symbol;
}

/**
 * @since 1.0.0
 */
export type ISSN = t.Branded<string, ISSNBrand>;

/**
 * @since 1.0.0
 */
export const ISSN = t.brand(
  t.string,
  (s): s is ISSN => isISSN(s),
  "ISSN"
);


export default ISSN ;
