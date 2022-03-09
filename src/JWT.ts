import * as t from "io-ts";
import isJWT from "validator/lib/isJWT";

export interface JWTBrand {
  readonly JWT: unique symbol;
}

export type JWT = t.Branded<string, JWTBrand>;

export const JWT = t.brand(
  t.string,
  (s): s is JWT => isJWT(s),
  "JWT"
);
