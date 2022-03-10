 import * as t from "io-ts";
import isISO31661Alpha2 from "validator/lib/isISO31661Alpha2";
import isISO31661Alpha3 from "validator/lib/isISO31661Alpha3";

/*
 * 2 or 3 character country code. I.e "US" or "USA"
 */

export interface CountryCodeBrand {
  readonly CountryCode: unique symbol;
}

export type CountryCode = t.Branded<string, CountryCodeBrand>;

export const CountryCode = t.brand(
  t.string,
  (s): s is CountryCode => isISO31661Alpha2(s) || isISO31661Alpha3(s),
 "CountryCode"
);


/*
 * 2 character country code. I.e "US"
 */

export interface CountryCode2Brand {
  readonly CountryCode2: unique symbol;
}

export type CountryCode2 = t.Branded<string, CountryCode2Brand>;

export const CountryCode2 = t.brand(
  t.string,
  (s): s is CountryCode2 => isISO31661Alpha2(s),
 "CountryCode2"
);


/*
 * 3 character country code. I.e "USA"
 */

export interface CountryCode3Brand {
  readonly CountryCode3: unique symbol;
}

export type CountryCode3 = t.Branded<string, CountryCode3Brand>;

export const CountryCode3 = t.brand(
  t.string,
  (s): s is CountryCode3 => isISO31661Alpha3(s),
 "CountryCode3"
);
