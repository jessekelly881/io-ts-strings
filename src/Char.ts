/**
 * A string of length one.
 *
 * @since 1.0.0
 */
import * as t from "io-ts";
import isLength from "validator/lib/isLength";

/**
 * @since 1.0.0
 */
export interface CharBrand {
  readonly Char: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Char = t.Branded<string, CharBrand>;

/**
 * @since 1.0.0
 */
export const Char = t.brand(
  t.string,
  (s): s is Char => isLength(s, { min: 1, max: 1 }),
  "Char"
);


export default Char;
