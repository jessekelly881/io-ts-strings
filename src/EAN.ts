/**
 * European Article Number
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from 'io-ts/Decoder';
import isEAN from "validator/lib/isEAN";
import { pipe } from "fp-ts/function";

/**
 * @since 1.0.0
 */
export interface EANBrand {
  readonly EAN: unique symbol;
}

/**
 * @since 1.0.0
 */
export type EAN = t.Branded<string, EANBrand>;

/**
 * @since 1.0.0
 */
export const EAN = t.brand(t.string, (s): s is EAN => isEAN(s), "EAN");


/**
 * @since 1.1.0
 */
export const eanDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, EANBrand>> => pipe(
  D.string,
  D.refine((x): x is S & t.Brand<EANBrand> => isEAN(x), "EAN")
)

export default EAN;
