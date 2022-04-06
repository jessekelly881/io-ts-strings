/**
 * Strings without whitespace on either side
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from 'io-ts/Decoder';
import trim from "validator/lib/trim";
import { pipe } from 'fp-ts/function';


const isTrimmed = (s: string) => s === trim(s);

/**
 * @since 1.0.0
 */
export interface TrimmedBrand {
  readonly Trimmed: unique symbol;
}

/**
 * @categorty type
 * @since 1.0.0
 */
export type Trimmed = t.Branded<string, TrimmedBrand>;

/**
 * @since 1.0.0
 */
export const Trimmed = t.brand(t.string, (s): s is Trimmed => isTrimmed(s), "Trimmed");

/**
 * @since 1.1.0
 */
export const trimmedDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, TrimmedBrand>> => pipe(
  D.fromRefinement((x): x is S & t.Brand<TrimmedBrand> => isTrimmed(x), "Trimmed")
)


export default Trimmed;
