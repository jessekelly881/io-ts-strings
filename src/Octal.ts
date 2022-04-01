/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isOctal from "validator/lib/isOctal";
import { pipe } from "fp-ts/function";


/**
 * @since 1.0.0
 */
export interface OctalBrand {
  readonly Octal: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Octal = t.Branded<string, OctalBrand>;

/**
 * @since 1.0.0
 */
export const Octal = t.brand(
  t.string,
  (s): s is Octal => isOctal(s),
  "Octal"
);

/**
 * @since 1.1.0
 */
export const octalDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, OctalBrand>> => pipe(
  D.string,
  D.refine((x): x is t.Branded<S, OctalBrand> => isOctal(x), "Octal")
)


export default Octal;
