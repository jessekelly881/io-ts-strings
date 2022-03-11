/**
 * MongoDB Object ID
 *
 * @since 1.0.0
 */
import * as t from "io-ts";
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


export default MongoID;
