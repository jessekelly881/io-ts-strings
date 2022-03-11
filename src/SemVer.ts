/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isSemVer from "validator/lib/isSemVer";


/**
 * @since 1.0.0
 */
export interface SemVerBrand {
  readonly SemVer: unique symbol;
}

/**
 * @since 1.0.0
 */
export type SemVer = t.Branded<string, SemVerBrand>;

/**
 * @since 1.0.0
 */
export const SemVer = t.brand(t.string, (s): s is SemVer => isSemVer(s), "SemVer");


export default SemVer;
