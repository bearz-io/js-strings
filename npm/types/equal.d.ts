import type { CharBuffer } from "@bearz/slices/utils";
/**
 * Determines whether the string is equal to the specified other string.
 * @param value The string to compare.
 * @param other The other string to compare.
 * @returns `true` if the strings are equal; otherwise, `false`.
 */
export declare function equal(value: string, other: CharBuffer): boolean;
/**
 * Determines whether the string is equal to the specified other string
 * using case-insensitive comparison.
 *
 * @param value The string to compare.
 * @param other The other string to compare.
 * @returns `true` if the strings are equal; otherwise, `false`.
 */
export declare function equalFold(value: string, other: CharBuffer): boolean;
