/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isStrongPassword from "validator/lib/isStrongPassword";


/**
 * @since 1.0.0
 */
export interface StrongPasswordBrand {
  readonly StrongPassword: unique symbol;
}

/**
 * @since 1.0.0
 */
export type StrongPassword = t.Branded<string, StrongPasswordBrand>;

 /**
 * @since 1.0.0
 */
export const StrongPassword = t.brand(
  t.string,
  (s): s is StrongPassword => isStrongPassword(s),
  "StrongPassword"
);


export default StrongPassword;
