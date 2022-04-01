/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isNumeric from "validator/lib/isNumeric";
import { pipe } from "fp-ts/function";


/**
 * @since 1.0.0
 */
export interface NumericBrand {
  readonly Numeric: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Numeric = t.Branded<string, NumericBrand>;

/**
 * @since 1.0.0
 */
export const Numeric = t.brand(
  t.string,
  (s): s is Numeric => isNumeric(s),
  "Numeric"
);


/**
 * @since 1.1.0
 */
export const numericDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, NumericBrand>> => pipe(
  D.string,
  D.refine((x): x is t.Branded<S, NumericBrand> => isNumeric(x), "Numeric")
)



export default Numeric;
