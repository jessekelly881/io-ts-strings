import * as t from "io-ts";
import isBtcAddress from "validator/lib/isBtcAddress";

interface BitcoinAddressBrand {
  readonly BitcoinAddress: unique symbol;
}

type BitcoinAddress = t.Branded<string, BitcoinAddressBrand>;

const BitcoinAddress = t.brand(
  t.string,
  (s): s is BitcoinAddress => isBtcAddress(s),
  "BitcoinAddress"
);


export { BitcoinAddress, BitcoinAddressBrand }
export default BitcoinAddress;
