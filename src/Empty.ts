/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from 'io-ts/Decoder';
import isEmpty from "validator/lib/isEmpty";
import * as E from 'fp-ts/Either';
import { flow } from "fp-ts/function";

/**
 * @since 1.0.0
 */
export interface EmptyBrand {
  readonly Empty: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Empty = t.Branded<string, EmptyBrand>;

/**
 * @since 1.0.0
 */
export const Empty = t.brand(
  t.string,
  (s): s is Empty => isEmpty(s),
  "Empty"
);

/**
 * @since 1.1.0
 */
export const emptyDecoder: D.Decoder<string, Empty> = {
  decode: flow(Empty.decode, E.fold(u => D.failure(u, "Empty"), D.success))
}


export default Empty;
