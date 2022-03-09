import * as t from "io-ts";
import isBtcAddress from "validator/lib/isBtcAddress";

export interface BitcoinAddressBrand {
  readonly BitcoinAddress: unique symbol;
}

export type BitcoinAddress = t.Branded<string, BitcoinAddressBrand>;

export const BitcoinAddress = t.brand(
  t.string,
  (s): s is BitcoinAddress => isBtcAddress(s),
  "BitcoinAddress"
);
