/**
 * @since 1.0.0
 */
import * as t from 'io-ts'
import isBIC from 'validator/lib/isBIC'

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

export default BIC
