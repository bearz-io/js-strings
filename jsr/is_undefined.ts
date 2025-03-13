/**
 * Determines whether the string is undefined.
 * @param s The string to check.
 * @returns `true` if the string is undefined; otherwise, `false`.
 */
export function isUndefined(s: string | undefined): s is undefined {
    return s === undefined;
}
