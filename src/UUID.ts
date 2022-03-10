import * as t from "io-ts";
import isUUID from "validator/lib/isUUID";

/*
 * Any UUID Version
 */

interface UUIDBrand {
  readonly UUID: unique symbol;
}

type UUID = t.Branded<string, UUIDBrand>;

const UUID = t.brand(
  t.string,
  (s): s is UUID => isUUID(s),
  "UUID"
);


/*
 * UUID v3
 */

interface UUIDv3Brand {
  readonly UUIDv3: unique symbol;
}

type UUIDv3 = t.Branded<string, UUIDv3Brand>;

const UUIDv3 = t.brand(
  t.string,
  (s): s is UUIDv3 => isUUID(s, "3"),
  "UUIDv3"
);


/*
 * UUID v4
 */

interface UUIDv4Brand {
  readonly UUIDv4: unique symbol;
}

type UUIDv4 = t.Branded<string, UUIDv4Brand>;

const UUIDv4 = t.brand(
  t.string,
  (s): s is UUIDv4 => isUUID(s, "4"),
  "UUIDv4"
);


/*
 * UUID v5
 */

interface UUIDv5Brand {
  readonly UUIDv5: unique symbol;
}

type UUIDv5 = t.Branded<string, UUIDv5Brand>;

const UUIDv5 = t.brand(
  t.string,
  (s): s is UUIDv5 => isUUID(s, "5"),
  "UUIDv5"
);


export {
  UUID,
  UUIDBrand,
  UUIDv3,
  UUIDv3Brand,
  UUIDv4,
  UUIDv4Brand,
  UUIDv5,
  UUIDv5Brand
}

export default UUID;
