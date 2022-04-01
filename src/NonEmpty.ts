/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isEmpty from "validator/lib/isEmpty";
import { pipe } from 'fp-ts/function';


/**
 * @since 1.0.0
 */
export interface NonEmptyBrand {
  readonly NonEmpty: unique symbol;
}

/**
 * @since 1.0.0
 */
export type NonEmpty = t.Branded<string, NonEmptyBrand>;

/**
 * @since 1.0.0
 */
export const NonEmpty = t.brand(
  t.string,
  (s): s is NonEmpty => !isEmpty(s),
  "NonEmpty"
);

/**
 * @category decoders
 * @since 1.1.0
 */
export const nonEmptyDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, NonEmptyBrand>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, NonEmptyBrand> => !isEmpty(x), "NonEmpty")
)



export default NonEmpty;
