/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isSVG from "is-svg";

/**
 * @since 1.0.0
 */
export interface SVGBrand {
  readonly SVG: unique symbol;
}

/**
 * @categorty type
 * @since 1.0.0
 */
export type SVG = t.Branded<string, SVGBrand>;

/**
 * @since 1.0.0
 */
export const SVG = t.brand(t.string, (s): s is SVG => isSVG(s), "SVG");

export default SVG;
