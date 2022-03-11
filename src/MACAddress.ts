/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isMACAddress from "validator/lib/isMACAddress";


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


export default MACAddress;
