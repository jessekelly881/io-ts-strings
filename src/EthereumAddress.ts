/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isEthereumAddress from "validator/lib/isEthereumAddress";

/**
 * @since 1.0.0
 */
export interface EthereumAddressBrand {
  readonly EthereumAddress: unique symbol;
}

/**
 * @since 1.0.0
 */
export type EthereumAddress = t.Branded<string, EthereumAddressBrand>;

/**
 * @since 1.0.0
 */
export const EthereumAddress = t.brand(
  t.string,
  (s): s is EthereumAddress => isEthereumAddress(s),
  "EthereumAddress"
);


export default EthereumAddress;
