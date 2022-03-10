import * as t from "io-ts";
import isISSN from "validator/lib/isISSN";

interface ISSNBrand {
  readonly ISSN: unique symbol;
}

type ISSN = t.Branded<string, ISSNBrand>;

const ISSN = t.brand(
  t.string,
  (s): s is ISSN => isISSN(s),
  "ISSN"
);


export { ISSN, ISSNBrand };
export default ISSN ;
