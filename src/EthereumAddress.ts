/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isEthereumAddress from "validator/lib/isEthereumAddress";
import { pipe } from "fp-ts/function";

/**
 * @category types
 * @since 1.0.0
 */
export interface EthereumAddressBrand {
  readonly EthereumAddress: unique symbol;
}

/**
 * @category types
 * @since 1.0.0
 */
export type EthereumAddress = t.Branded<string, EthereumAddressBrand>;

/**
 * @category brands
 * @since 1.0.0
 */
export const EthereumAddress = t.brand(
  t.string,
  (s): s is EthereumAddress => isEthereumAddress(s),
  "EthereumAddress"
);

/**
 * @category decoders
 * @since 1.1.0
 */
export const ethereumAddressDecoder = <S extends string>():
  D.Decoder<S, t.Branded<S, EthereumAddressBrand>> => pipe(
    D.fromRefinement((x): x is t.Branded<S, EthereumAddressBrand> => isEthereumAddress(x), "EthereumAddress"))


export default EthereumAddress;
