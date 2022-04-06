/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isMagnetURI from "validator/lib/isMagnetURI";
import { pipe } from 'fp-ts/function';


/**
 * @since 1.0.0
 */
export interface MagnetURIBrand {
  readonly MagnetURI: unique symbol;
}

/**
 * @since 1.0.0
 */
export type MagnetURI = t.Branded<string, MagnetURIBrand>;

/**
 * @since 1.0.0
 */
export const MagnetURI = t.brand(
  t.string,
  (s): s is MagnetURI => isMagnetURI(s),
  "MagnetURI"
);

/**
 * @category decoders
 * @since 1.1.0
 */
export const magnetUriDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, MagnetURIBrand>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, MagnetURIBrand> => isMagnetURI(x), "MagnetURI")
)



export default MagnetURI;
