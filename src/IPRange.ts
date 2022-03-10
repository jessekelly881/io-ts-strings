import * as t from "io-ts";
import isIPRange from "validator/lib/isIPRange";

/*
 * Either ip version
 */

export interface IPRangeBrand {
  readonly IPRange: unique symbol;
}

export type IPRange = t.Branded<string, IPRangeBrand>;

export const IPRange = t.brand(
  t.string,
  (s): s is IPRange => isIPRange(s),
  "IPRange"
);


/*
 * IPv6
 */

export interface IPv6RangeBrand {
  readonly IPv6Range: unique symbol;
}

export type IPv6Range = t.Branded<string, IPv6RangeBrand>;

export const IPv6Range = t.brand(
  t.string,
  (s): s is IPv6Range => isIPRange(s, "6"),
  "IPv6Range"
);


/*
 * IPv4
 */

export interface IPv4RangeBrand {
  readonly IPv4Range: unique symbol;
}

export type IPv4Range = t.Branded<string, IPv4RangeBrand>;

export const IPv4Range = t.brand(
  t.string,
  (s): s is IPv4Range => isIPRange(s, "4"),
  "IPv4Range"
);
