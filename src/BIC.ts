/**
 * @since 1.0.0
 */
import * as t from 'io-ts'
import isBIC from 'validator/lib/isBIC'
import * as D from 'io-ts/Decoder';
import { pipe } from "fp-ts/function";


/**
 * @since 1.0.0
 */
export interface BICBrand {
  readonly BIC: unique symbol
}

/**
 * @since 1.0.0
 */
export type BIC = t.Branded<string, BICBrand>

/**
 * @since 1.0.0
 */
export const BIC = t.brand(t.string, (s): s is BIC => isBIC(s), 'BIC')

/**
 * @since 1.1.0
 */
export const bicDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, BICBrand>> => pipe(
  D.string,
  D.refine((x): x is t.Branded<S, BICBrand> => isBIC(x), "BIC")
)

export default BIC
