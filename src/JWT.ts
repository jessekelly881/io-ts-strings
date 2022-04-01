/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isJWT from "validator/lib/isJWT";
import { pipe } from "fp-ts/lib/function";


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


/**
 * @since 1.1.0
 */
export const jwtDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, JWTBrand>> => pipe(
  D.string,
  D.refine((x): x is t.Branded<S, JWTBrand> => isJWT(x), "JWT")
)



export default JWT;
