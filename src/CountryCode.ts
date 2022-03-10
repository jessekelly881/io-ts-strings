 import * as t from "io-ts";
import isISO31661Alpha2 from "validator/lib/isISO31661Alpha2";
import isISO31661Alpha3 from "validator/lib/isISO31661Alpha3";

/*
 * 2 or 3 character country code. I.e "US" or "USA"
 */

interface CountryCodeBrand {
  readonly CountryCode: unique symbol;
}

type CountryCode = t.Branded<string, CountryCodeBrand>;

const CountryCode = t.brand(
  t.string,
  (s): s is CountryCode => isISO31661Alpha2(s) || isISO31661Alpha3(s),
 "CountryCode"
);


/*
 * 2 character country code. I.e "US"
 */

interface CountryCode2Brand {
  readonly CountryCode2: unique symbol;
}

type CountryCode2 = t.Branded<string, CountryCode2Brand>;

const CountryCode2 = t.brand(
  t.string,
  (s): s is CountryCode2 => isISO31661Alpha2(s),
 "CountryCode2"
);


/*
 * 3 character country code. I.e "USA"
 */

interface CountryCode3Brand {
  readonly CountryCode3: unique symbol;
}

type CountryCode3 = t.Branded<string, CountryCode3Brand>;

const CountryCode3 = t.brand(
  t.string,
  (s): s is CountryCode3 => isISO31661Alpha3(s),
 "CountryCode3"
);


export {
  CountryCode,
  CountryCodeBrand,
  CountryCode2,
  CountryCode2Brand,
  CountryCode3,
  CountryCode3Brand
}

export default CountryCode;
