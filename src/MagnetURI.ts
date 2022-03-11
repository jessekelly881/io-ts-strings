/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isMagnetURI from "validator/lib/isMagnetURI";


/**
 * @since 1.0.0
 */
export interface MagnetURIBrand {
  readonly MagnetURI: unique symbol;
}

/**
 * @since 1.0.0
 */
export type MagnetURI = t.Branded<string, MagnetURIBrand>;

/**
 * @since 1.0.0
 */
export const MagnetURI = t.brand(
  t.string,
  (s): s is MagnetURI => isMagnetURI(s),
  "MagnetURI"
);


export default MagnetURI;
