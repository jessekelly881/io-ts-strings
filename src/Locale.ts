/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isLocale from "validator/lib/isLocale";


/**
 * @since 1.0.0
 */
export interface LocaleBrand {
  readonly Locale: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Locale = t.Branded<string, LocaleBrand>;

/**
 * @since 1.0.0
 */
export const Locale = t.brand(
  t.string,
  (s): s is Locale => isLocale(s),
 "Locale"
);


export default Locale;
