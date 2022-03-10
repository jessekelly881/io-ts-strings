import * as t from "io-ts";
import isNumeric from "validator/lib/isNumeric";

export interface NumericBrand {
  readonly Numeric: unique symbol;
}

export type Numeric = t.Branded<string, NumericBrand>;

export const URL = t.brand(
  t.string,
  (s): s is Numeric => isNumeric(s),
  "Numeric"
);
