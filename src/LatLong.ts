/**
 * A valid latlong string in the format "lat,long" or "lat, long"
 *
 * @since 1.0.0
 */
import * as t from "io-ts";
import isLatLong from "validator/lib/isLatLong";


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


export default LatLong;
