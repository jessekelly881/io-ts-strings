/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isURL from "validator/lib/isURL";


/**
 * @since 1.0.0
 */
export interface URLBrand {
  readonly URL: unique symbol;
}

/**
 * @since 1.0.0
 */
export type URL = t.Branded<string, URLBrand>;

/**
 * @since 1.0.0
 */
export const URL = t.brand(
  t.string,
  (s): s is URL => isURL(s),
  "URL"
);


export default URL;
