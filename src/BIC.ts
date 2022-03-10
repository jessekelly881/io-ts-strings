import * as t from 'io-ts'
import isBIC from 'validator/lib/isBIC'

interface BICBrand {
  readonly BIC: unique symbol
}

type BIC = t.Branded<string, BICBrand>
const BIC = t.brand(t.string, (s): s is BIC => isBIC(s), 'BIC')

export { BIC, BICBrand }
export default BIC
