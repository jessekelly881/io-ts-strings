/**
 * A string of length one.
 *
 * @since 1.0.0
 */
import { pipe } from "fp-ts/function";
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isLength from "validator/lib/isLength";

/**
 * @since 1.0.0
 */
export interface CharBrand {
  readonly Char: unique symbol;
}

/**
 * @since 1.0.0
 */
export const isChar = (s: string): boolean => isLength(s, { min: 1, max: 1 });

/**
 * @since 1.0.0
 */
export type Char = t.Branded<string, CharBrand>;

/**
 * @since 1.0.0
 */
export const Char = t.brand(
  t.string,
  (s): s is Char => isChar(s),
  "Char"
);

/**
 * @since 1.1.0
 */
export const charDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, Char>> => pipe(
  D.string,
  D.refine((x): x is S & t.Brand<Char> => isChar(x), "Char")
)


export default Char;
