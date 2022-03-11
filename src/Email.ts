/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isEmail from "validator/lib/isEmail";

/**
 * @since 1.0.0
 */
export interface EmailBrand {
  readonly Email: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Email = t.Branded<string, EmailBrand>;

/**
 * @since 1.0.0
 */
export const Email = t.brand(
  t.string,
  (s): s is Email => isEmail(s),
  "Email"
);

export default Email;
