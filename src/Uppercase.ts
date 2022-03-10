import * as t from "io-ts";
import isUppercase from "validator/lib/isUppercase";

interface UppercaseBrand {
  readonly Uppercase: unique symbol;
}

type Uppercase = t.Branded<string, UppercaseBrand>;

const Uppercase = t.brand(
  t.string,
  (s): s is Uppercase => isUppercase(s),
  "Uppercase"
);


export { Uppercase, UppercaseBrand };
export default Uppercase;
