import * as t from "io-ts";
import isAlpha from "validator/lib/isAlpha";

interface AlphaBrand {
  readonly Alpha: unique symbol;
}

type Alpha = t.Branded<string, AlphaBrand>;
const Alpha = t.brand(t.string, (s): s is Alpha => isAlpha(s), "Alpha");

export { Alpha, AlphaBrand };
