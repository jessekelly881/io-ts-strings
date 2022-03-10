import * as t from "io-ts";
import isISRC from "validator/lib/isISRC";

interface ISRCBrand {
  readonly ISRC: unique symbol;
}

type ISRC = t.Branded<string, ISRCBrand>;

const ISRC = t.brand(
  t.string,
  (s): s is ISRC => isISRC(s),
  "ISRC"
);


export { ISRC, ISRCBrand };
export default ISRC;
