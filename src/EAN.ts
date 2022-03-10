import * as t from "io-ts";
import isEAN from "validator/lib/isEAN";

interface EANBrand {
  readonly EAN: unique symbol;
}

type EAN = t.Branded<string, EANBrand>;
const EAN = t.brand(t.string, (s): s is EAN => isEAN(s), "EAN");

export { EAN, EANBrand };
export default EAN;
