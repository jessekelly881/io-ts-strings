import * as t from "io-ts";
import isStrongPassword from "validator/lib/isStrongPassword";

export interface StrongPasswordBrand {
  readonly StrongPassword: unique symbol;
}

export type StrongPassword = t.Branded<string, StrongPasswordBrand>;

export const StrongPassword = (options: Parameters<typeof isStrongPassword>[1]) => t.brand(
  t.string,
  (s): s is StrongPassword => isStrongPassword(s, options),
  "StrongPassword"
);
