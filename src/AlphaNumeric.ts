/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isAlphaNumeric from "validator/lib/isAlphanumeric";

/**
 * @since 1.0.0
 */
export interface AlphaNumericBrand {
  readonly AlphaNumeric: unique symbol;
}

/**
 * @since 1.0.0
 */
export type AlphaNumeric = t.Branded<string, AlphaNumericBrand>;

/**
 * @since 1.0.0
 */
export const AlphaNumeric = t.brand(t.string, (s): s is AlphaNumeric => isAlphaNumeric(s), "AlphaNumeric");

export default AlphaNumeric;
