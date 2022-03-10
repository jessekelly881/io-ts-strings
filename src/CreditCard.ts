import * as t from "io-ts";
import isCreditCard from "validator/lib/isCreditCard";

interface CreditCardBrand {
  readonly CreditCard: unique symbol;
}

type CreditCard = t.Branded<string, CreditCardBrand>;
const CreditCard = t.brand(
  t.string,
  (s): s is CreditCard => isCreditCard(s),
  "CreditCard"
);


export { CreditCard, CreditCardBrand };
export default CreditCard;
