/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isEmpty from "validator/lib/isEmpty";


/**
 * @since 1.0.0
 */
export interface NonEmptyBrand {
  readonly NonEmpty: unique symbol;
}

/**
 * @since 1.0.0
 */
export type NonEmpty = t.Branded<string, NonEmptyBrand>;

/**
 * @since 1.0.0
 */
export const NonEmpty = t.brand(
  t.string,
  (s): s is NonEmpty => !isEmpty(s),
  "NonEmpty"
);


export default NonEmpty;
