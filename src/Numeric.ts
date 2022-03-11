/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isNumeric from "validator/lib/isNumeric";


/**
 * @since 1.0.0
 */
export interface NumericBrand {
  readonly Numeric: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Numeric = t.Branded<string, NumericBrand>;

/**
 * @since 1.0.0
 */
export const Numeric = t.brand(
  t.string,
  (s): s is Numeric => isNumeric(s),
  "Numeric"
);


export default Numeric;
