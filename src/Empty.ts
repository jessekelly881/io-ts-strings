import * as t from "io-ts";
import isEmpty from "validator/lib/isEmpty";

interface EmptyBrand {
  readonly Empty: unique symbol;
}

type Empty = t.Branded<string, EmptyBrand>;

const Empty = t.brand(
  t.string,
  (s): s is Empty => isEmpty(s),
  "Empty"
);


export { Empty, EmptyBrand };
export default Empty;
