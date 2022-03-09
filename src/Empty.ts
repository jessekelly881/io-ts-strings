import * as t from "io-ts";
import isEmpty from "validator/lib/isEmpty";

export interface EmptyBrand {
  readonly Empty: unique symbol;
}

export type Empty = t.Branded<string, EmptyBrand>;

export const Empty = t.brand(
  t.string,
  (s): s is Empty => isEmpty(s),
  "Empty"
);
