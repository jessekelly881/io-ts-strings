import * as t from "io-ts";
import isCreditCard from "validator/lib/isCreditCard";

export interface CreditCardBrand {
  readonly CreditCard: unique symbol;
}

export type CreditCard = t.Branded<string, CreditCardBrand>;
export const CreditCard = t.brand(
  t.string,
  (s): s is CreditCard => isCreditCard(s),
  "CreditCard"
);
