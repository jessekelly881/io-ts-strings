import * as t from "io-ts";
import isAlpha from "validator/lib/isAlpha";

export interface AlphaBrand {
  readonly Alpha: unique symbol;
}

export type Alpha = t.Branded<string, AlphaBrand>;
export const Alpha = t.brand(t.string, (s): s is Alpha => isAlpha(s), "Alpha");
