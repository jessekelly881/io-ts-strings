import * as t from "io-ts";
import isUppercase from "validator/lib/isUppercase";

export interface UppercaseBrand {
  readonly Uppercase: unique symbol;
}

export type Uppercase = t.Branded<string, UppercaseBrand>;

export const Uppercase = t.brand(
  t.string,
  (s): s is Uppercase => isUppercase(s),
  "Uppercase"
);
