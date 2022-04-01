/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isMACAddress from "validator/lib/isMACAddress";
import { pipe } from 'fp-ts/function';


/**
 * @since 1.0.0
 */
export interface MACAddressBrand {
  readonly MACAddress: unique symbol;
}

/**
 * @since 1.0.0
 */
export type MACAddress = t.Branded<string, MACAddressBrand>;

/**
 * @since 1.0.0
 */
export const MACAddress = t.brand(
  t.string,
  (s): s is MACAddress => isMACAddress(s),
  "MACAddress"
);


/**
 * @category decoders
 * @since 1.1.0
 */
export const macAddressDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, MACAddressBrand>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, MACAddressBrand> => isMACAddress(x), "MacAddress")
)

export default MACAddress;
