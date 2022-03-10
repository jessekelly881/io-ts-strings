import * as t from "io-ts";
import isLength from "validator/lib/isLength";
import * as B from 'fp-ts/Bounded';

export interface LengthBrand {
  readonly Length: unique symbol;
}

export type Length = t.Branded<string, LengthBrand>;

export const Length = (b: B.Bounded<number>) => t.brand(
  t.string,
  (s): s is Length => isLength(s, { min: b.bottom, max: b.top }),
  "Length"
);
