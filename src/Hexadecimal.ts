import * as t from "io-ts";
import isHexadecimal from "validator/lib/isHexadecimal";

export interface HexadecimalBrand {
  readonly Hexadecimal: unique symbol;
}

export type Hexadecimal = t.Branded<string, HexadecimalBrand>;
export const Hexadecimal = t.brand(t.string, (s): s is Hexadecimal => isHexadecimal(s), "Hexadecimal");
