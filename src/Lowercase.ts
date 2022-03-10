import * as t from "io-ts";
import isLowercase from "validator/lib/isLowercase";

interface LowercaseBrand {
  readonly Lowercase: unique symbol;
}

type Lowercase = t.Branded<string, LowercaseBrand>;

const Lowercase = t.brand(
  t.string,
  (s): s is Lowercase => isLowercase(s),
  "Lowercase"
);


export { Lowercase, LowercaseBrand };
export default Lowercase;
