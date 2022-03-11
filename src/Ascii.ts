/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isAscii from "validator/lib/isAscii";


/**
 * @since 1.0.0
 */
export interface AsciiBrand {
  readonly Ascii: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Ascii = t.Branded<string, AsciiBrand>;

/**
 * @since 1.0.0
 */
export const Ascii = t.brand(t.string, (s): s is Ascii => isAscii(s), "Ascii");

export default Ascii;
