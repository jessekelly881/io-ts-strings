/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isPort from "validator/lib/isPort";


/**
 * @since 1.0.0
 */
export interface PortBrand {
  readonly Port: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Port = t.Branded<string, PortBrand>;

/**
 * @since 1.0.0
 */
export const Port = t.brand(
  t.string,
  (s): s is Port => isPort(s),
  "Port"
);


export default Port;
