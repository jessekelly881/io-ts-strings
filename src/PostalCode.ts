import * as t from "io-ts";
import isPostalCode from "validator/lib/isPostalCode";

/*
 * Any Country
 */

interface PostalCodeBrand {
  readonly PostalCode: unique symbol;
}

type PostalCode = t.Branded<string, PostalCodeBrand>;

const PostalCode = t.brand(
  t.string,
  (s): s is PostalCode => isPostalCode(s, "any"),
  "PostalCode"
);


/*
 * United States
 */

interface PostalCodeUSBrand {
  readonly PostalCodeUS: unique symbol;
}

type PostalCodeUS = t.Branded<string, PostalCodeUSBrand>;

const PostalCodeUS = t.brand(
  t.string,
  (s): s is PostalCodeUS => isPostalCode(s, "US"),
  "PostalCodeUS"
);


/*
 * Germany
 */

interface PostalCodeDEBrand {
  readonly PostalCodeDE: unique symbol;
}

type PostalCodeDE = t.Branded<string, PostalCodeDEBrand>;

const PostalCodeDE = t.brand(
  t.string,
  (s): s is PostalCodeDE => isPostalCode(s, "DE"),
  "PostalCodeDE"
);


/*
 * France
 */

interface PostalCodeFRBrand
{
  readonly PostalCodeFR: unique symbol;
}

type PostalCodeFR = t.Branded<string, PostalCodeFRBrand>;

const PostalCodeFR = t.brand(
  t.string,
  (s): s is PostalCodeFR => isPostalCode(s, "FR"),
  "PostalCodeFR"
);


export {
  PostalCode,
  PostalCodeBrand,
  PostalCodeDE,
  PostalCodeDEBrand,
  PostalCodeFR,
  PostalCodeFRBrand,
  PostalCodeUS,
  PostalCodeUSBrand
}

export default PostalCode;
