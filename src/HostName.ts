/**
 * @since 1.0.0
 */
import * as t from "io-ts";
import isHostName from "is-valid-host";

/**
 * @since 1.0.0
 */
export interface HostNameBrand {
  readonly HostName: unique symbol;
}

/**
 * @since 1.0.0
 */
export type HostName = t.Branded<string, HostNameBrand>;

/**
 * @since 1.0.0
 */
export const HostName = t.brand(t.string, (s): s is HostName => isHostName(s), "HostName");

export default HostName;
