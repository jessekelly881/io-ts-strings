import * as t from "io-ts";
import isEthereumAddress from "validator/lib/isEthereumAddress";

interface EthereumAddressBrand {
  readonly EthereumAddress: unique symbol;
}

type EthereumAddress = t.Branded<string, EthereumAddressBrand>;

const EthereumAddress = t.brand(
  t.string,
  (s): s is EthereumAddress => isEthereumAddress(s),
  "EthereumAddress"
);


export { EthereumAddress, EthereumAddressBrand };
export default EthereumAddress;
