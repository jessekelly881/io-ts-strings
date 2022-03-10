import * as t from "io-ts";
import isLength from "validator/lib/isLength";

/*
 * Char - A string of length one
 */

interface CharBrand {
  readonly Char: unique symbol;
}

type Char = t.Branded<string, CharBrand>;

const Char = t.brand(
  t.string,
  (s): s is Char => isLength(s, { min: 1, max: 1 }),
  "Char"
);


export { Char, CharBrand }
export default Char;
