/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isPort from "validator/lib/isPort";
import { pipe } from 'fp-ts/function';


/**
 * @since 1.0.0
 */
export interface PortBrand {
  readonly Port: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Port = t.Branded<string, PortBrand>;

/**
 * @since 1.0.0
 */
export const Port = t.brand(
  t.string,
  (s): s is Port => isPort(s),
  "Port"
);

/**
 * @category decoders
 * @since 1.1.0
 */
export const portDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, PortBrand>> => pipe(
  D.fromRefinement((x): x is t.Branded<S, PortBrand> => isPort(x), "Port")
)



export default Port;
