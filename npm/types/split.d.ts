/**
 * Splits a string into an array of substrings based on a specified separator.
 *
 * @param str - The input string or Uint8Array.
 * @param separator - The separator string or regular expression.
 * @param trim - Optional. Specifies whether to trim the resulting substrings. Defaults to `false`.
 * @param limit - Optional. The maximum number of substrings to return.
 * @returns An array of substrings.
 */
export declare function split(
    str: string | Uint8Array,
    separator: string | RegExp,
    trim?: boolean,
    limit?: number,
): string[];
