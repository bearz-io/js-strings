import { endsWith as og, endsWithFold as ogFold } from "@bearz/slices/ends-with";
/**
 * Determines whether the string ends with the specified suffix using
 * case-insensitive comparison.
 * @param value The string to check.
 * @param suffix The suffix to check for.
 * @returns `true` if the string ends with the suffix; otherwise, `false`.
 */
export function endsWithFold(value, suffix) {
    if (suffix.length > value.length) {
        return false;
    }
    return ogFold(value, suffix);
}
/**
 * Determines whether the string ends with the specified suffix.
 * @param value The string to check.
 * @param suffix The suffix to check for.
 * @returns `true` if the string ends with the suffix; otherwise, `false`.
 */
export function endsWith(value, suffix) {
    if (suffix.length > value.length) {
        return false;
    }
    return og(value, suffix);
}
