/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isIPRange from "validator/lib/isIPRange";


/**
 * @since 1.0.0
 */
export interface IPRangeBrand {
  readonly IPRange: unique symbol;
}

/**
 * @since 1.0.0
 */
export type IPRange = t.Branded<string, IPRangeBrand>;

/**
 * @since 1.0.0
 */
export const IPRange = t.brand(
  t.string,
  (s): s is IPRange => isIPRange(s),
  "IPRange"
);

/**
 * @since 1.0.0
 */
export interface IPv6RangeBrand {
  readonly IPv6Range: unique symbol;
}

/**
 * @since 1.0.0
 */
export type IPv6Range = t.Branded<string, IPv6RangeBrand>;

/**
 * @since 1.0.0
 */
export const IPv6Range = t.brand(
  t.string,
  (s): s is IPv6Range => isIPRange(s, "6"),
  "IPv6Range"
);

/**
 * @since 1.0.0
 */
export interface IPv4RangeBrand {
  readonly IPv4Range: unique symbol;
}

/**
 * @since 1.0.0
 */
export type IPv4Range = t.Branded<string, IPv4RangeBrand>;

/**
 * @since 1.0.0
 */
export const IPv4Range = t.brand(
  t.string,
  (s): s is IPv4Range => isIPRange(s, "4"),
  "IPv4Range"
);


export default IPRange;
