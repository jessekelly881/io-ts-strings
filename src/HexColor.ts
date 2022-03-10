import * as t from "io-ts";
import isHexColor from "validator/lib/isHexColor";

interface HexColorBrand {
  readonly HexColor: unique symbol;
}

type HexColor = t.Branded<string, HexColorBrand>;
const HexColor = t.brand(t.string, (s): s is HexColor => isHexColor(s), "HexColor");


export { HexColor, HexColorBrand };
export default HexColor;
