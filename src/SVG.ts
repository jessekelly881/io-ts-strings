/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isSVG from "is-svg";
import { pipe } from 'fp-ts/function';

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

/**
 * @category decoders
 * @since 1.1.0
 */
export const svgDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, SVGBrand>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, SVGBrand> => isSVG(x), "SVG")
)


export default SVG;
