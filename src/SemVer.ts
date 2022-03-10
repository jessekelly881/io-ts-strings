import * as t from "io-ts";
import isSemVer from "validator/lib/isSemVer";

interface SemVerBrand {
  readonly SemVer: unique symbol;
}

type SemVer = t.Branded<string, SemVerBrand>;
const SemVer = t.brand(t.string, (s): s is SemVer => isSemVer(s), "SemVer");


export { SemVer, SemVerBrand };
export default SemVer;
