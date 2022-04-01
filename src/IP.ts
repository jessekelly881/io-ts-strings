/**
 * @since 1.0.0
 */
import { pipe } from "fp-ts/lib/function";
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isIP from "validator/lib/isIP";



/**
 * @since 1.0.0
 */
export interface IPBrand {
  readonly IP: unique symbol;
}

/**
 * @since 1.0.0
 */
export interface IPv4Brand {
  readonly IPv4: unique symbol;
}

/**
 * @since 1.0.0
 */
export interface IPv6Brand {
  readonly IPv6: unique symbol;
}



/**
 * @since 1.0.0
 */
export type IP = t.Branded<string, IPBrand>;

/**
 * @since 1.0.0
 */
export const IP = t.brand(
  t.string,
  (s): s is IP => isIP(s),
  "IP"
);

/**
 * @since 1.0.0
 */
export type IPv4 = t.Branded<string, IPv4Brand>;

/**
 * @since 1.0.0
 */
export const IPv4 = t.brand(
  t.string,
  (s): s is IPv4 => isIP(s, "4"),
  "IPv4"
);

/**
 * @since 1.0.0
 */
export type IPv6 = t.Branded<string, IPv6Brand>;

/**
 * @since 1.0.0
 */
export const IPv6 = t.brand(
  t.string,
  (s): s is IPv6 => isIP(s, "6"),
  "IPv6"
);



type IPMap = {
  "any": IPv4Brand & IPv6Brand,
  "4": IPv4Brand,
  "6": IPv6Brand
}

type IPCode = keyof IPMap;



/**
 * @since 1.1.0
 */
export const ipDecoder = <S extends string, B extends IPCode = "any">(code: B = "any" as B):
  D.Decoder<S, IPBrand & t.Branded<S, IPMap[B]>> => pipe(
    D.string,
    D.refine((x): x is IPBrand & t.Branded<S, IPMap[B]> => code === "any" ? isIP(x) : isIP(x, code), "IP")
  )


export default IP;
