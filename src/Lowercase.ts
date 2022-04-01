/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isLowercase from "validator/lib/isLowercase";
import { pipe } from 'fp-ts/function';


/**
 * @category types
 * @since 1.0.0
 */
export interface LowercaseBrand {
  readonly Lowercase: unique symbol;
}

/**
 * @category types
 * @since 1.0.0
 */
export type Lowercase = t.Branded<string, LowercaseBrand>;

/**
 * @category brands
 * @since 1.0.0
 */
export const Lowercase = t.brand(
  t.string,
  (s): s is Lowercase => isLowercase(s),
  "Lowercase"
);

/**
 * @category decoders
 * @since 1.1.0
 */
export const lowercaseDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, LowercaseBrand>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, LowercaseBrand> => isLowercase(x), "Lowercase")
)



export default Lowercase;
