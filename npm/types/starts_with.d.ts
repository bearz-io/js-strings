/**
 * The starts-with module provides functions to check if a string starts with a given prefix.
 *
 * @module
 */
import type { CharBuffer } from "@bearz/slices/utils";
/**
 * Determines if the leading characters in the string matches the prefix.
 * @param value The string to check.
 * @param prefix The characters to search for.
 * @returns `true` if the string starts with the prefix; otherwise, `false`.
 */
export declare function startsWith(value: string, prefix: CharBuffer): boolean;
/**
 * Determines if the leading characters in the string matches the prefix
 * using case-insensitive comparison.
 * @param value The string to check.
 * @param prefix The characters to search for.
 * @returns `true` if the string starts with the prefix; otherwise, `false`.
 */
export declare function startsWithFold(value: string, prefix: CharBuffer): boolean;
