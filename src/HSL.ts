import * as t from "io-ts";
import isHSL from "validator/lib/isHSL";

interface HSLBrand {
  readonly HSL: unique symbol;
}

type HSL = t.Branded<string, HSLBrand>;
const HSL = t.brand(t.string, (s): s is HSL => isHSL(s), "HSL");


export { HSL, HSLBrand };
export default HSL;
