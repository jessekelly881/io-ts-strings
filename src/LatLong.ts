/**
 * A valid latlong string in the format "lat,long" or "lat, long"
 *
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isLatLong from "validator/lib/isLatLong";
import { pipe } from "fp-ts/function";


/**
 * @since 1.0.0
 */
export interface LatLongBrand {
  readonly LatLong: unique symbol;
}

/**
 * @since 1.0.0
 */
export type LatLong = t.Branded<string, LatLongBrand>;

/**
 * @since 1.0.0
 */
export const LatLong = t.brand(
  t.string,
  (s): s is LatLong => isLatLong(s),
 "LatLong"
);


/**
 * @since 1.1.0
 */
export const latLongDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, LatLongBrand>> => pipe(
  D.string,
  D.refine((x): x is t.Branded<S, LatLongBrand> => isLatLong(x), "LatLong")
)

export default LatLong;
