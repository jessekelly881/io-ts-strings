import * as t from "io-ts";
import isOctal from "validator/lib/isOctal";

export interface OctalBrand {
  readonly Octal: unique symbol;
}

export type Octal = t.Branded<string, OctalBrand>;

export const Octal = t.brand(
  t.string,
  (s): s is Octal => isOctal(s),
  "Octal"
);
