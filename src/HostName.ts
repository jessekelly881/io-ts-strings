/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isHostName from "is-valid-host";
import { pipe } from "fp-ts/lib/function";

/**
 * @category types
 * @since 1.0.0
 */
export interface HostNameBrand {
  readonly HostName: unique symbol;
}

/**
 * @category types
 * @since 1.0.0
 */
export type HostName = t.Branded<string, HostNameBrand>;

/**
 * @category brands
 * @since 1.0.0
 */
export const HostName = t.brand(t.string, (s): s is HostName => isHostName(s), "HostName");

/**
 * @category decoders
 * @since 1.1.0
 */
export const hostNameDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, HostName>> => pipe(
  D.string,
  D.refine((x): x is t.Branded<S, HostName> => isHostName(x), "HostName")
)


export default HostName;
