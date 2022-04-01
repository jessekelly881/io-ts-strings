/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isHSL from "validator/lib/isHSL";
import { pipe } from "fp-ts/function";

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

/**
 * @since 1.1.0
 */
export const hslDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, HSLBrand>> => pipe(
  D.string,
  D.refine((x): x is S & t.Brand<HSLBrand> => isHSL(x), "Ascii")
)



export default HSL;
