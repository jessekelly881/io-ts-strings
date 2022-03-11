/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isIP from "validator/lib/isIP";


/**
 * @since 1.0.0
 */
export interface IPBrand {
  readonly IP: unique symbol;
}

/**
 * @since 1.0.0
 */
export type IP = t.Branded<string, IPBrand>;

/**
 * @since 1.0.0
 */
export const IP = t.brand(
  t.string,
  (s): s is IP => isIP(s),
  "IP"
);

/**
 * @since 1.0.0
 */
export interface IPv4Brand {
  readonly IPv4: unique symbol;
}

/**
 * @since 1.0.0
 */
export type IPv4 = t.Branded<string, IPv4Brand>;

/**
 * @since 1.0.0
 */
export const IPv4 = t.brand(
  t.string,
  (s): s is IPv4 => isIP(s, "4"),
  "IPv4"
);

/**
 * @since 1.0.0
 */
export interface IPv6Brand {
  readonly IPv6: unique symbol;
}

/**
 * @since 1.0.0
 */
export type IPv6 = t.Branded<string, IPv6Brand>;

/**
 * @since 1.0.0
 */
export const IPv6 = t.brand(
  t.string,
  (s): s is IPv6 => isIP(s, "6"),
  "IPv6"
);


export default IP;
