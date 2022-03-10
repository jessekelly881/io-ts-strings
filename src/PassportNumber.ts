import * as t from "io-ts";
import isPassportNumber from "validator/lib/isPassportNumber";


/*
 * Any Country
 */

interface PassportNumberBrand {
  readonly PassportNumber: unique symbol;
}

type PassportNumber = t.Branded<string, PassportNumberBrand>;

const PassportNumber = t.brand(
  t.string,
  (s): s is PassportNumber => isPassportNumber(s),
  "PassportNumber"
);


/*
 * United States
 */

interface PassportNumberUSBrand {
  readonly PassportNumberUS: unique symbol;
}

type PassportNumberUS = t.Branded<string, PassportNumberUSBrand>;

const PassportNumberUS = t.brand(
  t.string,
  (s): s is PassportNumberUS => isPassportNumber(s, "US"),
  "PassportNumberUS"
);


/*
 * France
 */

interface PassportNumberFRBrand {
  readonly PassportNumberFR: unique symbol;
}

type PassportNumberFR = t.Branded<string, PassportNumberFRBrand>;

const PassportNumberFR = t.brand(
  t.string,
  (s): s is PassportNumberFR => isPassportNumber(s, "FR"),
  "PassportNumberFR"
);


/*
 * Germany
 */

interface PassportNumberDEBrand {
  readonly PassportNumberDE: unique symbol;
}

type PassportNumberDE = t.Branded<string, PassportNumberDEBrand>;

const PassportNumberDE = t.brand(
  t.string,
  (s): s is PassportNumberDE => isPassportNumber(s, "DE"),
  "PassportNumberDE"
);


export {
  PassportNumber,
  PassportNumberBrand,
  PassportNumberDE,
  PassportNumberDEBrand,
  PassportNumberFR,
  PassportNumberFRBrand,
  PassportNumberUS,
  PassportNumberUSBrand
}

export default PassportNumber;
