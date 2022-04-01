/**
 * International Standard Recording Code
 * ISO 3901
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isISRC from "validator/lib/isISRC";
import { pipe } from "fp-ts/function";

/**
 * @since 1.0.0
 */
export interface ISRCBrand {
  readonly ISRC: unique symbol;
}

/**
 * @since 1.0.0
 */
export type ISRC = t.Branded<string, ISRCBrand>;

/**
 * @since 1.0.0
 */
export const ISRC = t.brand(
  t.string,
  (s): s is ISRC => isISRC(s),
  "ISRC"
);

/**
 * @category decoders
 * @since 1.1.0
 */
export const isrcDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, ISRCBrand>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, ISRCBrand> => isISRC(x), "ISRC")
)


export default ISRC;
