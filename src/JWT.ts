import * as t from "io-ts";
import isJWT from "validator/lib/isJWT";

interface JWTBrand {
  readonly JWT: unique symbol;
}

type JWT = t.Branded<string, JWTBrand>;

const JWT = t.brand(
  t.string,
  (s): s is JWT => isJWT(s),
  "JWT"
);


export { JWT, JWTBrand };
export default JWT;
