import * as t from "io-ts";
import isMobilePhone from "validator/lib/isMobilePhone";


/*
 * Any Country
 */

interface PhoneNumberBrand {
  readonly PhoneNumber: unique symbol;
}

type PhoneNumber = t.Branded<string, PhoneNumberBrand>;

const PhoneNumber = t.brand(
  t.string,
  (s): s is PhoneNumber => isMobilePhone(s),
  "PhoneNumber"
);


/*
 * United States
 */

interface PhoneNumberUSBrand {
  readonly PhoneNumberUS: unique symbol;
}

type PhoneNumberUS = t.Branded<string, PhoneNumberUSBrand>;

const PhoneNumberUS = t.brand(
  t.string,
  (s): s is PhoneNumberUS => isMobilePhone(s, "en-US"),
  "PhoneNumberUS"
);


/*
 * France
 */

interface PhoneNumberFRBrand {
  readonly PhoneNumberFR: unique symbol;
}

type PhoneNumberFR = t.Branded<string, PhoneNumberFRBrand>;

const PhoneNumberFR = t.brand(
  t.string,
  (s): s is PhoneNumberFR => isMobilePhone(s, "fr-FR"),
  "PhoneNumberFR"
);


/*
 * Germany
 */

interface PhoneNumberDEBrand {
  readonly PhoneNumberDE: unique symbol;
}

type PhoneNumberDE = t.Branded<string, PhoneNumberDEBrand>;

const PhoneNumberDE = t.brand(
  t.string,
  (s): s is PhoneNumberDE => isMobilePhone(s, "de-DE"),
  "PhoneNumberDE"
);


export {
  PhoneNumber,
  PhoneNumberBrand,
  PhoneNumberDE,
  PhoneNumberDEBrand,
  PhoneNumberFR,
  PhoneNumberFRBrand,
  PhoneNumberUS,
  PhoneNumberUSBrand
}

export default PhoneNumber;
