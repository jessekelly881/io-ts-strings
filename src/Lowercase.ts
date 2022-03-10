import * as t from "io-ts";
import isLowercase from "validator/lib/isLowercase";

export interface LowercaseBrand {
  readonly Lowercase: unique symbol;
}

export type Lowercase = t.Branded<string, LowercaseBrand>;

export const Lowercase = t.brand(
  t.string,
  (s): s is Lowercase => isLowercase(s),
  "Lowercase"
);
