import * as t from "io-ts";
import isNumeric from "validator/lib/isNumeric";

interface NumericBrand {
  readonly Numeric: unique symbol;
}

type Numeric = t.Branded<string, NumericBrand>;

const Numeric = t.brand(
  t.string,
  (s): s is Numeric => isNumeric(s),
  "Numeric"
);


export { Numeric, NumericBrand };
export default Numeric;
