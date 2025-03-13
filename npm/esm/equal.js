import { equal as og, equalFold as ogFold } from "@bearz/slices/equal";
/**
 * Determines whether the string is equal to the specified other string.
 * @param value The string to compare.
 * @param other The other string to compare.
 * @returns `true` if the strings are equal; otherwise, `false`.
 */
export function equal(value, other) {
    return og(value, other);
}
/**
 * Determines whether the string is equal to the specified other string
 * using case-insensitive comparison.
 *
 * @param value The string to compare.
 * @param other The other string to compare.
 * @returns `true` if the strings are equal; otherwise, `false`.
 */
export function equalFold(value, other) {
    if (value.length !== other.length) {
        return false;
    }
    return ogFold(value, other);
}
