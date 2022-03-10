import * as t from "io-ts";
import isLength from "validator/lib/isLength";

/*
 * Char - A string of length one
 */

export interface CharBrand {
  readonly Char: unique symbol;
}

export type Char = t.Branded<string, CharBrand>;

export const Char = t.brand(
  t.string,
  (s): s is Char => isLength(s, { min: 1, max: 1 }),
  "Char"
);
