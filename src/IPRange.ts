import * as t from "io-ts";
import isIPRange from "validator/lib/isIPRange";

/*
 * Either ip version
 */

interface IPRangeBrand {
  readonly IPRange: unique symbol;
}

type IPRange = t.Branded<string, IPRangeBrand>;

const IPRange = t.brand(
  t.string,
  (s): s is IPRange => isIPRange(s),
  "IPRange"
);


/*
 * IPv6
 */

interface IPv6RangeBrand {
  readonly IPv6Range: unique symbol;
}

type IPv6Range = t.Branded<string, IPv6RangeBrand>;

const IPv6Range = t.brand(
  t.string,
  (s): s is IPv6Range => isIPRange(s, "6"),
  "IPv6Range"
);


/*
 * IPv4
 */

interface IPv4RangeBrand {
  readonly IPv4Range: unique symbol;
}

type IPv4Range = t.Branded<string, IPv4RangeBrand>;

const IPv4Range = t.brand(
  t.string,
  (s): s is IPv4Range => isIPRange(s, "4"),
  "IPv4Range"
);


export { IPRange, IPRangeBrand, IPv4Range, IPv4RangeBrand, IPv6Range, IPv6RangeBrand };
export default IPRange;
