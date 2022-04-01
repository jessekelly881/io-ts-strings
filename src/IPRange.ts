/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isIPRange from "validator/lib/isIPRange";
import { pipe } from 'fp-ts/function';


/**
 * @since 1.0.0
 */
export interface IPRangeBrand {
  readonly IPRange: unique symbol;
}

/**
 * @since 1.0.0
 */
export type IPRange = t.Branded<string, IPRangeBrand>;

/**
 * @since 1.0.0
 */
export const IPRange = t.brand(
  t.string,
  (s): s is IPRange => isIPRange(s),
  "IPRange"
);

/**
 * @since 1.0.0
 */
export interface IPv6RangeBrand {
  readonly IPv6Range: unique symbol;
}

/**
 * @since 1.0.0
 */
export type IPv6Range = t.Branded<string, IPv6RangeBrand>;

/**
 * @since 1.0.0
 */
export const IPv6Range = t.brand(
  t.string,
  (s): s is IPv6Range => isIPRange(s, "6"),
  "IPv6Range"
);

/**
 * @since 1.0.0
 */
export interface IPv4RangeBrand {
  readonly IPv4Range: unique symbol;
}

/**
 * @since 1.0.0
 */
export type IPv4Range = t.Branded<string, IPv4RangeBrand>;

/**
 * @since 1.0.0
 */
export const IPv4Range = t.brand(
  t.string,
  (s): s is IPv4Range => isIPRange(s, "4"),
  "IPv4Range"
);


type BrandMap = {
  "any": IPv4RangeBrand & IPv6RangeBrand,
  "4": IPv4RangeBrand,
  "6": IPv6RangeBrand
}

type Key = keyof BrandMap;

/**
 * @since 1.1.0
 */
export const ipRangeDecoder = <S extends string, B extends Key = "any">(code: B = "any" as B):
  D.Decoder<S, IPRangeBrand & t.Branded<S, BrandMap[B]>> => pipe(
    D.string,
    D.refine((x): x is IPRangeBrand & t.Branded<S, BrandMap[B]> => code === "any" ? isIPRange(x) : isIPRange(x, code), "IPRange")
  )



export default IPRange;
