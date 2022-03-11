/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isHexadecimal from "validator/lib/isHexadecimal";

/**
 * @since 1.0.0
 */
export interface HexadecimalBrand {
  readonly Hexadecimal: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Hexadecimal = t.Branded<string, HexadecimalBrand>;

/**
 * @since 1.0.0
 */
export const Hexadecimal = t.brand(t.string, (s): s is Hexadecimal => isHexadecimal(s), "Hexadecimal");


export default Hexadecimal;
