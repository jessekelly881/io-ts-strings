import * as t from "io-ts";
import isHostName from "is-valid-host";

interface HostNameBrand {
  readonly HostName: unique symbol;
}

type HostName = t.Branded<string, HostNameBrand>;
const HostName = t.brand(t.string, (s): s is HostName => isHostName(s), "HostName");

export { HostName, HostNameBrand };
export default HostName;
