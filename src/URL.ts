import * as t from "io-ts";
import isURL from "validator/lib/isURL";

interface URLBrand {
  readonly URL: unique symbol;
}

type URL = t.Branded<string, URLBrand>;

const URL = t.brand(
  t.string,
  (s): s is URL => isURL(s),
  "URL"
);


export { URL, URLBrand };
export default URL;
