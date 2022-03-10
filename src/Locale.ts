import * as t from "io-ts";
import isLocale from "validator/lib/isLocale";


interface LocaleBrand {
  readonly Locale: unique symbol;
}

type Locale = t.Branded<string, LocaleBrand>;

const Locale = t.brand(
  t.string,
  (s): s is Locale => isLocale(s),
 "Locale"
);


export { Locale, LocaleBrand };
export default Locale;
