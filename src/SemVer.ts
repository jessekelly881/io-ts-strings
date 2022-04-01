/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isSemVer from "validator/lib/isSemVer";
import { pipe } from 'fp-ts/function';


/**
 * @since 1.0.0
 */
export interface SemVerBrand {
  readonly SemVer: unique symbol;
}

/**
 * @since 1.0.0
 */
export type SemVer = t.Branded<string, SemVerBrand>;

/**
 * @since 1.0.0
 */
export const SemVer = t.brand(t.string, (s): s is SemVer => isSemVer(s), "SemVer");

/**
 * @category decoders
 * @since 1.1.0
 */
export const semVerDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, SemVerBrand>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, SemVerBrand> => isSemVer(x), "SemVer")
)


export default SemVer;
