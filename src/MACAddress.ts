import * as t from "io-ts";
import isMACAddress from "validator/lib/isMACAddress";

interface MACAddressBrand {
  readonly MACAddress: unique symbol;
}

type MACAddress = t.Branded<string, MACAddressBrand>;

const MACAddress = t.brand(
  t.string,
  (s): s is MACAddress => isMACAddress(s),
  "MACAddress"
);


export { MACAddress, MACAddressBrand };
export default MACAddress;
