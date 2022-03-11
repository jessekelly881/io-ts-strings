/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isLowercase from "validator/lib/isLowercase";


/**
 * @since 1.0.0
 */
export interface LowercaseBrand {
  readonly Lowercase: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Lowercase = t.Branded<string, LowercaseBrand>;

/**
 * @since 1.0.0
 */
export const Lowercase = t.brand(
  t.string,
  (s): s is Lowercase => isLowercase(s),
  "Lowercase"
);


export default Lowercase;
