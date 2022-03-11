import * as t from "io-ts";
import isAlpha from "validator/lib/isAlpha";

/*
 * @categorty type
 * @since 1.0.0
 */
interface AlphaBrand {
  readonly Alpha: unique symbol;
}

/*
 * @categorty type
 * @since 1.0.0
 */
type Alpha = t.Branded<string, AlphaBrand>;

/*

 * A string that only includes alpha characters. E.g. a, b, c, A, B, C
 *
 * @categorty codec
 * @since 1.0. 0
 */
const Alpha = t.brand(t.string, (s): s is Alpha => isAlpha(s), "Alpha");

export { Alpha, AlphaBrand };
export default Alpha;
