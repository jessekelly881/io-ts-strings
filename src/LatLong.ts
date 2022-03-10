import * as t from "io-ts";
import isLatLong from "validator/lib/isLatLong";

/*
 * LatLong
 *
 * Check if the string is a valid latitude-longitude coordinate in the format
 * lat,long or lat, long
 */

export interface LatLongBrand {
  readonly LatLong: unique symbol;
}

export type LatLong = t.Branded<string, LatLongBrand>;

export const LatLong = t.brand(
  t.string,
  (s): s is LatLong => isLatLong(s),
 "LatLong"
);
