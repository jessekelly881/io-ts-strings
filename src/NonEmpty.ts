import * as t from "io-ts";
import isEmpty from "validator/lib/isEmpty";

interface NonEmptyBrand {
  readonly NonEmpty: unique symbol;
}

type NonEmpty = t.Branded<string, NonEmptyBrand>;

const NonEmpty = t.brand(
  t.string,
  (s): s is NonEmpty => !isEmpty(s),
  "NonEmpty"
);


export { NonEmpty, NonEmptyBrand };
export default NonEmpty;
