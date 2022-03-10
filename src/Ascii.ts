import * as t from "io-ts";
import isAscii from "validator/lib/isAscii";

export interface AsciiBrand {
  readonly Ascii: unique symbol;
}

export type Ascii = t.Branded<string, AsciiBrand>;
export const Ascii = t.brand(t.string, (s): s is Ascii => isAscii(s), "Ascii");
