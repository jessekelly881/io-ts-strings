import * as t from "io-ts";
import isCreditCard from "validator/lib/isCreditCard";

const isVisa = (str: string) =>
  /^4[0-9]{12}(?:[0-9]{3})?$/.test(str);

const isMastercard = (str: string) =>
  /^5[1-5][0-9]{14}$/.test(str);


/*
 * Any Debit/Credit Card Number
 */

interface CreditCardBrand {
  readonly CreditCard: unique symbol;
}

type CreditCard = t.Branded<string, CreditCardBrand>;
const CreditCard = t.brand(
  t.string,
  (s): s is CreditCard => isCreditCard(s),
  "CreditCard"
);


/*
 * Mastercard Card Number
 */

interface MastercardBrand {
  readonly Mastercard: unique symbol;
}

type Mastercard = t.Branded<string, MastercardBrand>;
const Mastercard = t.brand(
  t.string,
  (s): s is Mastercard => isMastercard(s),
  "Mastercard"
);


/*
 * Visa Card Number
 */

interface VisaBrand {
  readonly Visa: unique symbol ;
}

type Visa = t.Branded<string, VisaBrand>;
const Visa = t.brand(
  t.string,
  (s): s is Visa => isVisa(s),
  "Visa"
);


export {
  CreditCard,
  CreditCardBrand,
  Mastercard,
  MastercardBrand,
  Visa,
  VisaBrand
};

export default CreditCard;
