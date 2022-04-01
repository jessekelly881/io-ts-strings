/**
 * MongoDB Object ID
 *
 * @since 1.0.0
 */
import { pipe } from "fp-ts/function";
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import isMongoID from "validator/lib/isMongoId";


/**
 * @since 1.0.0
 */
export interface MongoIDBrand {
  readonly MongoID: unique symbol;
}

/**
 * @since 1.0.0
 */
export type MongoID = t.Branded<string, MongoIDBrand>;

/**
 * @since 1.0.0
 */
export const MongoID = t.brand(t.string, (s): s is MongoID => isMongoID(s), "MongoID");


/**
 * @since 1.1.0
 */
export const mongoIDDecoder = <S extends string>(): D.Decoder<S, t.Branded<S, MongoIDBrand>> => pipe(
  D.string,
  D.refine((x): x is t.Branded<S, MongoIDBrand> => isMongoID(x), "MongoID")
)



export default MongoID;
