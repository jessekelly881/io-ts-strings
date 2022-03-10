import * as t from "io-ts";
import isBIC from "validator/lib/isBIC";

export interface BICBrand {
  readonly BIC: unique symbol;
}

export type BIC = t.Branded<string, BICBrand>;
export const BIC = t.brand(t.string, (s): s is BIC => isBIC(s), "BIC");
