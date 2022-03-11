/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isEAN from "validator/lib/isEAN";

/**
 * @since 1.0.0
 */
export interface EANBrand {
  readonly EAN: unique symbol;
}

/**
 * @since 1.0.0
 */
export type EAN = t.Branded<string, EANBrand>;

/**
 * @since 1.0.0
 */
export const EAN = t.brand(t.string, (s): s is EAN => isEAN(s), "EAN");

export default EAN;
