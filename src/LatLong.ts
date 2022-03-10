import * as t from "io-ts";
import isLatLong from "validator/lib/isLatLong";

/*
 * LatLong
 *
 * Check if the string is a valid latitude-longitude coordinate in the format
 * lat,long or lat, long
 */

interface LatLongBrand {
  readonly LatLong: unique symbol;
}

type LatLong = t.Branded<string, LatLongBrand>;

const LatLong = t.brand(
  t.string,
  (s): s is LatLong => isLatLong(s),
 "LatLong"
);


export { LatLong, LatLongBrand };
export default LatLong;
