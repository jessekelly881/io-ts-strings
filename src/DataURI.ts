/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isDataURI from "validator/lib/isDataURI";

/**
 * @since 1.0.0
 */
export interface DataURIBrand {
  readonly DataURI: unique symbol;
}

/**
 * @since 1.0.0
 */
export type DataURI = t.Branded<string, DataURIBrand>;

/**
 * @since 1.0.0
 */
export const DataURI = t.brand(t.string, (s): s is DataURI => isDataURI(s), "DataURI");


export default DataURI;
