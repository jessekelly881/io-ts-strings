import * as t from "io-ts";
import isBoolean from "validator/lib/isBoolean";

interface BooleanBrand {
  readonly Boolean: unique symbol;
}

type Boolean = t.Branded<string, BooleanBrand>;
const Boolean = t.brand(t.string, (s): s is Boolean => isBoolean(s), "Boolean");

export { Boolean, BooleanBrand };
export default Boolean;
