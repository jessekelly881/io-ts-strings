/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isEmpty from "validator/lib/isEmpty";

/**
 * @since 1.0.0
 */
export interface EmptyBrand {
  readonly Empty: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Empty = t.Branded<string, EmptyBrand>;

/**
 * @since 1.0.0
 */
export const Empty = t.brand(
  t.string,
  (s): s is Empty => isEmpty(s),
  "Empty"
);


export default Empty;
