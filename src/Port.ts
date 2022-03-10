import * as t from "io-ts";
import isPort from "validator/lib/isPort";

export interface PortBrand {
  readonly Port: unique symbol;
}

export type Port = t.Branded<string, PortBrand>;

export const Port = t.brand(
  t.string,
  (s): s is Port => isPort(s),
  "Port"
);
