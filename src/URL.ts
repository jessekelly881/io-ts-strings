/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isURL from "validator/lib/isURL";
import { pipe } from 'fp-ts/function';


/**
 * @since 1.0.0
 */
export interface URLBrand {
  readonly URL: unique symbol;
}

/**
 * @since 1.0.0
 */
export type URL = t.Branded<string, URLBrand>;

/**
 * @since 1.0.0
 */
export const URL = t.brand(
  t.string,
  (s): s is URL => isURL(s),
  "URL"
);

/**
 * @category decoders
 * @since 1.1.0
 */
export const urlDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, URLBrand>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, URLBrand> => isURL(x), "URL")
)



export default URL;
