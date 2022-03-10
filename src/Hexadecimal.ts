import * as t from "io-ts";
import isHexadecimal from "validator/lib/isHexadecimal";

interface HexadecimalBrand {
  readonly Hexadecimal: unique symbol;
}

type Hexadecimal = t.Branded<string, HexadecimalBrand>;
const Hexadecimal = t.brand(t.string, (s): s is Hexadecimal => isHexadecimal(s), "Hexadecimal");


export { Hexadecimal, HexadecimalBrand }
export default Hexadecimal;
