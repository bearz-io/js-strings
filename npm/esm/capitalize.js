import { capitalize as og } from "@bearz/slices/capitalize";
/**
 * Capitalizes the first letter of the string.
 * @param value The string to capitalize.
 * @param options The options for capitalizing the string.
 * @returns The capitalized string.
 */
export function capitalize(value, options) {
    const r = og(value, options);
    return String.fromCodePoint(...r);
}
