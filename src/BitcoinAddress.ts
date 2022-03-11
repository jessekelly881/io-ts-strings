/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isBtcAddress from "validator/lib/isBtcAddress";

/**
 * @since 1.0.0
 */
export interface BitcoinAddressBrand {
  readonly BitcoinAddress: unique symbol;
}

/**
 * @since 1.0.0
 */
export type BitcoinAddress = t.Branded<string, BitcoinAddressBrand>;

/**
 * @since 1.0.0
 */
export const BitcoinAddress = t.brand(
  t.string,
  (s): s is BitcoinAddress => isBtcAddress(s),
  "BitcoinAddress"
);


export default BitcoinAddress;
