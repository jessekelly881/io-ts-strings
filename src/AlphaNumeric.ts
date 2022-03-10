import * as t from "io-ts";
import isAlphaNumeric from "validator/lib/isAlphaNumeric";

interface AlphaNumericBrand {
  readonly AlphaNumeric: unique symbol;
}

type AlphaNumeric = t.Branded<string, AlphaNumericBrand>;
const AlphaNumeric = t.brand(t.string, (s): s is AlphaNumeric => isAlphaNumeric(s), "AlphaNumeric");

export { AlphaNumeric, AlphaNumericBrand };
