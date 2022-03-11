/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isISRC from "validator/lib/isISRC";

/**
 * @since 1.0.0
 */
export interface ISRCBrand {
  readonly ISRC: unique symbol;
}

/**
 * @since 1.0.0
 */
export type ISRC = t.Branded<string, ISRCBrand>;

/**
 * @since 1.0.0
 */
export const ISRC = t.brand(
  t.string,
  (s): s is ISRC => isISRC(s),
  "ISRC"
);


export default ISRC;
