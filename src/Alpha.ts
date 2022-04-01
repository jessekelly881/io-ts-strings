/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from 'io-ts/Decoder';
import isAlpha from "validator/lib/isAlpha";
import { pipe } from 'fp-ts/function';

/**
 * @since 1.0.0
 */
export interface AlphaBrand {
  readonly Alpha: unique symbol;
}

/**
 * @categorty type
 * @since 1.0.0
 */
export type Alpha = t.Branded<string, AlphaBrand>;

/**
 * @since 1.0.0
 */
export const Alpha = t.brand(t.string, (s): s is Alpha => isAlpha(s), "Alpha");

/**
 * @since 1.1.0
 */
export const alphaDecoder = <S extends unknown>(): D.Decoder<S, t.Branded<S, AlphaBrand>> => pipe(
  D.fromRefinement((x): x is S & t.Brand<AlphaBrand> => typeof x === "string" && isAlpha(x), "Alpha")
)


export default Alpha;
