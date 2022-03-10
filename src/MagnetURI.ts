import * as t from "io-ts";
import isMagnetURI from "validator/lib/isMagnetURI";

export interface MagnetURIBrand {
  readonly MagnetURI: unique symbol;
}

export type MagnetURI = t.Branded<string, MagnetURIBrand>;

export const MagnetURI = t.brand(
  t.string,
  (s): s is MagnetURI => isMagnetURI(s),
  "MagnetURI"
);
