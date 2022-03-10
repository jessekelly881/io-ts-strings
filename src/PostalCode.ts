import * as t from "io-ts";
import isPostalCode from "validator/lib/isPostalCode";

/*
 * Any Country
 */

export interface PostalCodeBrand {
  readonly PostalCode: unique symbol;
}

export type PostalCode = t.Branded<string, PostalCodeBrand>;

export const PostalCode = t.brand(
  t.string,
  (s): s is PostalCode => isPostalCode(s, "any"),
  "PostalCode"
);


/*
 * United States
 */

export interface PostalCodeUSBrand {
  readonly PostalCodeUS: unique symbol;
}

export type PostalCodeUS = t.Branded<string, PostalCodeUSBrand>;

export const PostalCodeUS = t.brand(
  t.string,
  (s): s is PostalCodeUS => isPostalCode(s, "US"),
  "PostalCodeUS"
);


/*
 * Germany
 */

export interface PostalCodeDEBrand {
  readonly PostalCodeDE: unique symbol;
}

export type PostalCodeDE = t.Branded<string, PostalCodeDEBrand>;

export const PostalCodeDE = t.brand(
  t.string,
  (s): s is PostalCodeDE => isPostalCode(s, "DE"),
  "PostalCodeDE"
);


/*
 * France
 */

export interface PostalCodeFRBrand
{
  readonly PostalCodeFR: unique symbol;
}

export type PostalCodeFR = t.Branded<string, PostalCodeFRBrand>;

export const PostalCodeFR = t.brand(
  t.string,
  (s): s is PostalCodeFR => isPostalCode(s, "FR"),
  "PostalCodeFR"
);
