/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isHexColor from "validator/lib/isHexColor";

/**
 * @since 1.0.0
 */
export interface HexColorBrand {
  readonly HexColor: unique symbol;
}

/**
 * @since 1.0.0
 */
export type HexColor = t.Branded<string, HexColorBrand>;

/**
 * @since 1.0.0
 */
export const HexColor = t.brand(t.string, (s): s is HexColor => isHexColor(s), "HexColor");


export default HexColor;
