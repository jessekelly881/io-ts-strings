/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isUppercase from "validator/lib/isUppercase";


/**
 * @since 1.0.0
 */
export interface UppercaseBrand {
  readonly Uppercase: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Uppercase = t.Branded<string, UppercaseBrand>;

/**
 * @since 1.0.0
 */
export const Uppercase = t.brand(
  t.string,
  (s): s is Uppercase => isUppercase(s),
  "Uppercase"
);


export default Uppercase;
