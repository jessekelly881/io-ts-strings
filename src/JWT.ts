/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isJWT from "validator/lib/isJWT";


/**
 * @since 1.0.0
 */
export interface JWTBrand {
  readonly JWT: unique symbol;
}

/**
 * @since 1.0.0
 */
export type JWT = t.Branded<string, JWTBrand>;

/**
 * @since 1.0.0
 */
export const JWT = t.brand(
  t.string,
  (s): s is JWT => isJWT(s),
  "JWT"
);


export default JWT;
