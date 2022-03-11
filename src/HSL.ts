/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isHSL from "validator/lib/isHSL";

/**
 * @since 1.0.0
 */
export interface HSLBrand {
  readonly HSL: unique symbol;
}

/**
 * @since 1.0.0
 */
export type HSL = t.Branded<string, HSLBrand>;

/**
 * @since 1.0.0
 */
export const HSL = t.brand(t.string, (s): s is HSL => isHSL(s), "HSL");


export default HSL;
