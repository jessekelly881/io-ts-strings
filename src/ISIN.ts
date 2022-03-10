import * as t from "io-ts";
import isISIN from "validator/lib/isISIN";

interface ISINBrand {
  readonly ISIN: unique symbol;
}

type ISIN = t.Branded<string, ISINBrand>;

const ISIN = t.brand(
  t.string,
  (s): s is ISIN => isISIN(s),
  "ISIN"
);


export { ISIN, ISINBrand };
export default ISIN;
