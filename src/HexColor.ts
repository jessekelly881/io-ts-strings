import * as t from "io-ts";
import isHexColor from "validator/lib/isHexColor";

export interface HexColorBrand {
  readonly HexColor: unique symbol;
}

export type HexColor = t.Branded<string, HexColorBrand>;
export const HexColor = t.brand(t.string, (s): s is HexColor => isHexColor(s), "HexColor");
