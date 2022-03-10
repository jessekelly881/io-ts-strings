import * as t from "io-ts";
import isStrongPassword from "validator/lib/isStrongPassword";

interface StrongPasswordBrand {
  readonly StrongPassword: unique symbol;
}

type StrongPassword = t.Branded<string, StrongPasswordBrand>;

const StrongPassword = t.brand(
  t.string,
  (s): s is StrongPassword => isStrongPassword(s),
  "StrongPassword"
);


export { StrongPassword, StrongPasswordBrand };
export default StrongPassword;
