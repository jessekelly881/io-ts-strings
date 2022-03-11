/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isPostalCode from "validator/lib/isPostalCode";


/**
 * @since 1.0.0
 */
export interface PostalCodeBrand {
  readonly PostalCode: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PostalCode = t.Branded<string, PostalCodeBrand>;

/**
 * @since 1.0.0
 */
export const PostalCode = t.brand(
  t.string,
  (s): s is PostalCode => isPostalCode(s, "any"),
  "PostalCode"
);

/**
 * @since 1.0.0
 */
export interface PostalCodeUSBrand {
  readonly PostalCodeUS: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PostalCodeUS = t.Branded<string, PostalCodeUSBrand>;

/**
 * @since 1.0.0
 */
export const PostalCodeUS = t.brand(
  t.string,
  (s): s is PostalCodeUS => isPostalCode(s, "US"),
  "PostalCodeUS"
);

/**
 * @since 1.0.0
 */
export interface PostalCodeDEBrand {
  readonly PostalCodeDE: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PostalCodeDE = t.Branded<string, PostalCodeDEBrand>;

/**
 * @since 1.0.0
 */
export const PostalCodeDE = t.brand(
  t.string,
  (s): s is PostalCodeDE => isPostalCode(s, "DE"),
  "PostalCodeDE"
);

/**
 * @since 1.0.0
 */
export interface PostalCodeFRBrand {
  readonly PostalCodeFR: unique symbol;
}

/**
 * @since 1.0.0
 */
export type PostalCodeFR = t.Branded<string, PostalCodeFRBrand>;

/**
 * @since 1.0.0
 */
export const PostalCodeFR = t.brand(
  t.string,
  (s): s is PostalCodeFR => isPostalCode(s, "FR"),
  "PostalCodeFR"
);


export default PostalCode;
