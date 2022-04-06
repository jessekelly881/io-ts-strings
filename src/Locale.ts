/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isLocale from "validator/lib/isLocale";
import { pipe } from "fp-ts/function";


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

/**
 * @since 1.1.0
 */
export const localeDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, LocaleBrand>> => pipe(
  D.string,
  D.refine((x): x is t.Branded<S, LocaleBrand> => isLocale(x), "Locale")
)


export default Locale;
