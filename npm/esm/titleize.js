/**
 * The titleize module provides a function to convert a string to title case.
 *
 * @module
 */
import { titleize as og } from "@bearz/slices/titleize";
/**
 * Converts the string to title case.
 * @param s The string to titleize.
 * @returns The titleized string.
 */
export function titleize(s) {
    const r = og(s);
    return String.fromCodePoint(...r);
}
