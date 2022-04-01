/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isHexadecimal from "validator/lib/isHexadecimal";
import { pipe } from "fp-ts/function";



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


/**
 * @since 1.1.0
 */
export const hexadecimalDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, Hexadecimal>> => pipe(
  D.string,
  D.refine((x): x is t.Branded<S, Hexadecimal> => isHexadecimal(x), "Hexadecimal")
)


export default Hexadecimal;
