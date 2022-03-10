import * as t from "io-ts";
import isLocale from "validator/lib/isLocale";


export interface LocaleBrand {
  readonly Locale: unique symbol;
}

export type Locale = t.Branded<string, LocaleBrand>;

export const Locale = t.brand(
  t.string,
  (s): s is Locale => isLocale(s),
 "Locale"
);
