import * as t from "io-ts";
import isAscii from "validator/lib/isAscii";

interface AsciiBrand {
  readonly Ascii: unique symbol;
}

type Ascii = t.Branded<string, AsciiBrand>;
const Ascii = t.brand(t.string, (s): s is Ascii => isAscii(s), "Ascii");

export { Ascii, AsciiBrand };
export default Ascii;
