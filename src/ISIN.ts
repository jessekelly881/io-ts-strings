/**
 * International Securities Identification Number
 * ISO 6166
 * @since 1.0.0
 */
import * as t from 'io-ts';
import * as D from 'io-ts/Decoder';
import isISIN from 'validator/lib/isISIN';
import { pipe } from 'fp-ts/function';

/**
 * @category types
 * @since 1.0.0
 */
export interface ISINBrand {
  readonly ISIN: unique symbol
}

/**
 * @category types
 * @since 1.0.0
 */
export type ISIN = t.Branded<string, ISINBrand>

/**
 * @category brands
 * @since 1.0.0
 */
export const ISIN = t.brand(t.string, (s): s is ISIN => isISIN(s), 'ISIN')


/**
 * @category decoders
 * @since 1.1.0
 */
export const isinDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, ISINBrand>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, ISINBrand> => isISIN(x), "ISIN")
)

export default ISIN
