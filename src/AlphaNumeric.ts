/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from 'io-ts/Decoder';
import isAlphaNumeric from "validator/lib/isAlphanumeric";
import { pipe } from "fp-ts/function";

/**
 * @since 1.0.0
 */
export interface AlphaNumericBrand {
  readonly AlphaNumeric: unique symbol;
}

/**
 * @since 1.0.0
 */
export type AlphaNumeric = t.Branded<string, AlphaNumericBrand>;

/**
 * @since 1.0.0
 */
export const AlphaNumeric = t.brand(
  t.string,
  (s): s is AlphaNumeric => isAlphaNumeric(s),
  "AlphaNumeric"
);


/**
 * @since 1.1.0
 */
export const alphaNumericDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, AlphaNumericBrand>> => pipe(
  D.string,
  D.refine((x): x is S & t.Brand<AlphaNumericBrand> => AlphaNumeric.is(x), "AlphaNumeric")
)

export default AlphaNumeric;
