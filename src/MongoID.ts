import * as t from "io-ts";
import isMongoID from "validator/lib/isMongoID";

/*
 * MongoDB Object ID
 */
interface MongoIDBrand {
  readonly MongoID: unique symbol;
}

type MongoID = t.Branded<string, MongoIDBrand>;
const MongoID = t.brand(t.string, (s): s is MongoID => isMongoID(s), "MongoID");

export { MongoID, MongoIDBrand };
export default MongoID;
