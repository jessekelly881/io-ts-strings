import * as t from "io-ts";
import isMagnetURI from "validator/lib/isMagnetURI";

interface MagnetURIBrand {
  readonly MagnetURI: unique symbol;
}

type MagnetURI = t.Branded<string, MagnetURIBrand>;

const MagnetURI = t.brand(
  t.string,
  (s): s is MagnetURI => isMagnetURI(s),
  "MagnetURI"
);


export { MagnetURI, MagnetURIBrand };
export default MagnetURI;
