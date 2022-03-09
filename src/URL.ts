import * as t from "io-ts";
import isURL from "validator/lib/isURL";

export interface URLBrand {
  readonly URL: unique symbol;
}

export type URL = t.Branded<string, URLBrand>;

export const URL = t.brand(
  t.string,
  (s): s is URL => isURL(s),
  "URL"
);
