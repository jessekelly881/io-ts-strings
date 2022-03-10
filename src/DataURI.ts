import * as t from "io-ts";
import isDataURI from "validator/lib/isDataURI";

export interface DataURIBrand {
  readonly DataURI: unique symbol;
}

export type DataURI = t.Branded<string, DataURIBrand>;
export const DataURI = t.brand(t.string, (s): s is DataURI => isDataURI(s), "DataURI");
