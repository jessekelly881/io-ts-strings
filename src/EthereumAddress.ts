import * as t from "io-ts";
import isEthereumAddress from "validator/lib/isEthereumAddress";

export interface EthereumAddressBrand {
  readonly EthereumAddress: unique symbol;
}

export type EthereumAddress = t.Branded<string, EthereumAddressBrand>;

export const EthereumAddress = t.brand(
  t.string,
  (s): s is EthereumAddress => isEthereumAddress(s),
  "EthereumAddress"
);
