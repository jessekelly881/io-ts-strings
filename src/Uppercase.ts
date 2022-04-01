/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isUppercase from "validator/lib/isUppercase";
import { pipe } from 'fp-ts/function';


/**
 * @since 1.0.0
 */
export interface UppercaseBrand {
  readonly Uppercase: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Uppercase = t.Branded<string, UppercaseBrand>;

/**
 * @since 1.0.0
 */
export const Uppercase = t.brand(
  t.string,
  (s): s is Uppercase => isUppercase(s),
  "Uppercase"
);

/**
 * @category decoders
 * @since 1.1.0
 */
export const uppercaseDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, UppercaseBrand>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, UppercaseBrand> => isUppercase(x), "Uppercase")
)



export default Uppercase;
