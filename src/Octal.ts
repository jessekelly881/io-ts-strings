/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isOctal from "validator/lib/isOctal";


/**
 * @since 1.0.0
 */
export interface OctalBrand {
  readonly Octal: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Octal = t.Branded<string, OctalBrand>;

/**
 * @since 1.0.0
 */
export const Octal = t.brand(
  t.string,
  (s): s is Octal => isOctal(s),
  "Octal"
);


export default Octal;
