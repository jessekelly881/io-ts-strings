/**
 * @since 1.0.0
 */
 import * as t from "io-ts";
import isISO31661Alpha2 from "validator/lib/isISO31661Alpha2";
import isISO31661Alpha3 from "validator/lib/isISO31661Alpha3";

/*
 * 2 or 3 character country code. I.e "US" or "USA"
 */

/**
 * @since 1.0.0
 */
export interface CountryCodeBrand {
  readonly CountryCode: unique symbol;
}

/**
 * @since 1.0.0
 */
export type CountryCode = t.Branded<string, CountryCodeBrand>;

/**
 * @since 1.0.0
 */
export const CountryCode = t.brand(
  t.string,
  (s): s is CountryCode => isISO31661Alpha2(s) || isISO31661Alpha3(s),
 "CountryCode"
);


/**
 * @since 1.0.0
 */
export interface CountryCode2Brand {
  readonly CountryCode2: unique symbol;
}

/**
 * @since 1.0.0
 */
export type CountryCode2 = t.Branded<string, CountryCode2Brand>;

/**
 * 2 character country code. I.e "US"
 *
 * @since 1.0.0
 */
export const CountryCode2 = t.brand(
  t.string,
  (s): s is CountryCode2 => isISO31661Alpha2(s),
 "CountryCode2"
);


/**
 * @since 1.0.0
 */
export interface CountryCode3Brand {
  readonly CountryCode3: unique symbol;
}

/**
 * @since 1.0.0
 */
export type CountryCode3 = t.Branded<string, CountryCode3Brand>;

/**
 * 3 character country code. I.e "USA"
 *
 * @since 1.0.0
 */
export const CountryCode3 = t.brand(
  t.string,
  (s): s is CountryCode3 => isISO31661Alpha3(s),
 "CountryCode3"
);


export default CountryCode;
