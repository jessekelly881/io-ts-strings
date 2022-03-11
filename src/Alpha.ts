/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isAlpha from "validator/lib/isAlpha";

/**
 * @since 1.0.0
 */
export interface AlphaBrand {
  readonly Alpha: unique symbol;
}

/**
 * @categorty type
 * @since 1.0.0
 */
export type Alpha = t.Branded<string, AlphaBrand>;

/**
 * @since 1.0.0
 */
export const Alpha = t.brand(t.string, (s): s is Alpha => isAlpha(s), "Alpha");

export default Alpha;
