import * as t from "io-ts";
import isOctal from "validator/lib/isOctal";

interface OctalBrand {
  readonly Octal: unique symbol;
}

type Octal = t.Branded<string, OctalBrand>;

const Octal = t.brand(
  t.string,
  (s): s is Octal => isOctal(s),
  "Octal"
);


export { Octal, OctalBrand };
export default Octal;
