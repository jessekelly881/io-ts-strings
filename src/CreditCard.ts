/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isCreditCard from "validator/lib/isCreditCard";

const isVisa = (str: string) =>
  /^4[0-9]{12}(?:[0-9]{3})?$/.test(str);

const isMastercard = (str: string) =>
  /^5[1-5][0-9]{14}$/.test(str);


/**
 * @since 1.0.0
 */
export interface CreditCardBrand {
  readonly CreditCard: unique symbol;
}

/**
 * @since 1.0.0
 */
export type CreditCard = t.Branded<string, CreditCardBrand>;

/**
 * Any Debit/Credit Card Number
 *
 * @since 1.0.0
 */
export const CreditCard = t.brand(
  t.string,
  (s): s is CreditCard => isCreditCard(s),
  "CreditCard"
);

/**
 * @since 1.0.0
 */
export interface MastercardBrand {
  readonly Mastercard: unique symbol;
}

/**
 * @since 1.0.0
 */
export type Mastercard = t.Branded<string, MastercardBrand>;

/**
 * Mastercard Card Number
 *
 * @since 1.0.0
 */
export const Mastercard = t.brand(
  t.string,
  (s): s is Mastercard => isMastercard(s),
  "Mastercard"
);

/**
 * @since 1.0.0
 */
export interface VisaBrand {
  readonly Visa: unique symbol ;
}

/**
 * @since 1.0.0
 */
export type Visa = t.Branded<string, VisaBrand>;

/**
 * @since 1.0.0
 */
export const Visa = t.brand(
  t.string,
  (s): s is Visa => isVisa(s),
  "Visa"
);


export default CreditCard;
