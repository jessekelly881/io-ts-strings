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
 *
 * @example
 * import * as t from 'io-ts'
 * import { Email } from 'io-ts-strings'
 *
 * const codec = t.interface({
 *   email: Email,
 * })
 *
 * codec.decode({ email: 'john@b.com' }) // Right
 * codec.decode({ email: 'john.com' }) // Left
 */
export const Email = t.brand(
  t.string,
  (s): s is Email => isEmail(s),
  "Email"
);

export default Email;
