import * as t from "io-ts";
import isEmail from "validator/lib/isEmail";

interface EmailBrand {
  readonly Email: unique symbol;
}

type Email = t.Branded<string, EmailBrand>;

const Email = t.brand(
  t.string,
  (s): s is Email => isEmail(s),
  "Email"
);

export { Email, EmailBrand };
export default Email;
