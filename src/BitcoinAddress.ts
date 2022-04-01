/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isBtcAddress from "validator/lib/isBtcAddress";
import { pipe } from "fp-ts/function";

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

/**
 * @since 1.1.0
 */
export const bitcoinAddressDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, BitcoinAddress>> => pipe(
  D.string,
  D.refine((x): x is t.Branded<S, BitcoinAddress> => isBtcAddress(x), "BitcoinAddress")
)


export default BitcoinAddress;
