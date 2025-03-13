/**
 * Determines whether the string is null.
 * @param s The string to check.
 * @returns `true` if the string is null or undefined; otherwise, `false`.
 */
export function isNull(s: string | null): s is null {
    return s === null;
}
