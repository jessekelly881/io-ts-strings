import * as t from "io-ts";
import isBase32 from "validator/lib/isBase32";
import isBase58 from "validator/lib/isBase58";
import isBase64 from "validator/lib/isBase64";

/*
 * Base 32 Encoded
 */

interface Base32Brand {
  readonly Base32: unique symbol;
}

type Base32 = t.Branded<string, Base32Brand>;
const Base32 = t.brand(t.string, (s): s is Base32 => isBase32(s), "Base32");


/*
 * Base 58 Encoded
 */

interface Base58Brand {
  readonly Base58: unique symbol;
}

type Base58 = t.Branded<string, Base58Brand>;
const Base58 = t.brand(t.string, (s): s is Base58 => isBase58(s), "Base58");


/*
 * Base 64 Encoded
 */

interface Base64Brand {
  readonly Base64: unique symbol;
}

type Base64 = t.Branded<string, Base64Brand>;
const Base64 = t.brand(t.string, (s): s is Base64 => isBase64(s), "Base64");


export {
  Base32,
  Base32Brand,
  Base58,
  Base58Brand,
  Base64,
  Base64Brand
}

export default Base32;
