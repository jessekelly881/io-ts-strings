import * as t from "io-ts";
import isHSL from "validator/lib/isHSL";

export interface HSLBrand {
  readonly HSL: unique symbol;
}

export type HSL = t.Branded<string, HSLBrand>;
export const HSL = t.brand(t.string, (s): s is HSL => isHSL(s), "HSL");
