/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isHexColor from "validator/lib/isHexColor";
import { pipe } from "fp-ts/function";

/**
 * @category types
 * @since 1.0.0
 */
export interface HexColorBrand {
  readonly HexColor: unique symbol;
}

/**
 * @category types
 * @since 1.0.0
 */
export type HexColor = t.Branded<string, HexColorBrand>;

/**
 * @category brand
 * @since 1.0.0
 */
export const HexColor = t.brand(t.string, (s): s is HexColor => isHexColor(s), "HexColor");


/**
 * @category decoders
 * @since 1.1.0
 */
export const hexColorDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, HexColor>> => pipe(
  D.string,
  D.refine((x): x is t.Branded<S, HexColor> => isHexColor(x), "HexColor"))



export default HexColor;
