import * as t from "io-ts";
import isPort from "validator/lib/isPort";

interface PortBrand {
  readonly Port: unique symbol;
}

type Port = t.Branded<string, PortBrand>;

const Port = t.brand(
  t.string,
  (s): s is Port => isPort(s),
  "Port"
);


export { Port, PortBrand };
export default Port;
