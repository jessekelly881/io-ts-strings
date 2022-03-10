import * as t from "io-ts";
import isDataURI from "validator/lib/isDataURI";

interface DataURIBrand {
  readonly DataURI: unique symbol;
}

type DataURI = t.Branded<string, DataURIBrand>;
const DataURI = t.brand(t.string, (s): s is DataURI => isDataURI(s), "DataURI");


export { DataURI, DataURIBrand };
export default DataURI;
