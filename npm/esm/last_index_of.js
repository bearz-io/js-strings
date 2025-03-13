import { lastIndexOf as og, lastIndexOfFold as ogFold } from "@bearz/slices/last-index-of";
/**
 * Gets the index of the last occurrence of the specified characters
 * in the string.
 * @param value The string to search.
 * @param chars The characters to search for.
 * @param index The index to start searching from.
 * @returns The index of the last occurrence of the characters in the string.
 * If the string is not found, returns -1.
 */
export function lastIndexOf(value, chars, index = 0) {
    return og(value, chars, index);
}
/**
 * Gets the index of the last occurrence of the specified characters
 * in the string using case-insensitive comparison.
 * @param value The string to search.
 * @param chars The characters to search for.
 * @param index The index to start searching from.
 * @returns The index of the last occurrence of the characters in the string.
 * If the string is not found, returns -1.
 */
export function lastIndexOfFold(value, chars, index = 0) {
    return ogFold(value, chars, index);
}
