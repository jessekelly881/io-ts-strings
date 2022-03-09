import * as t from "io-ts";
import isMACAddress from "validator/lib/isMACAddress";

export interface MACAddressBrand {
  readonly MACAddress: unique symbol;
}

export type MACAddress = t.Branded<string, MACAddressBrand>;

export const MACAddress = t.brand(
  t.string,
  (s): s is MACAddress => isMACAddress(s),
  "MACAddress"
);
