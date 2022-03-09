import * as t from "io-ts";
import isEmail from "validator/lib/isEmail";

export interface EmailBrand {
  readonly Email: unique symbol;
}

export type Email = t.Branded<string, EmailBrand>;

export const Email = t.brand(
  t.string,
  (s): s is Email => isEmail(s),
  "Email"
);
