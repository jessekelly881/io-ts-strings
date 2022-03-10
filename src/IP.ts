import * as t from "io-ts";
import isIP from "validator/lib/isIP";

interface IPBrand {
  readonly IP: unique symbol;
}

type IP = t.Branded<string, IPBrand>;

const IP = t.brand(
  t.string,
  (s): s is IP => isIP(s),
  "IP"
);

/*
 * ipv4
 */

interface IPv4Brand {
  readonly IPv4: unique symbol;
}

type IPv4 = t.Branded<string, IPv4Brand>;

const IPv4 = t.brand(
  t.string,
  (s): s is IPv4 => isIP(s, "4"),
  "IPv4"
);


/*
 * ipv6
 */

interface IPv6Brand {
  readonly IPv6: unique symbol;
}

type IPv6 = t.Branded<string, IPv6Brand>;

const IPv6 = t.brand(
  t.string,
  (s): s is IPv6 => isIP(s, "6"),
  "IPv6"
);

export default IP;
export { IPBrand, IPv4, IPv4Brand, IPv6, IPv6Brand };
