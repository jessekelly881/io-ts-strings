/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isAscii from "validator/lib/isAscii";
import * as D from 'io-ts/Decoder';
import { pipe } from "fp-ts/function";


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

/**
 * @since 1.1.0
 */
export const asciiDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, AsciiBrand>> => pipe(
  D.string,
  D.refine((x): x is S & t.Brand<AsciiBrand> => isAscii(x), "Ascii")
)

export default Ascii;
