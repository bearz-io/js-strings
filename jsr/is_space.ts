import { isSpaceAt } from "@bearz/chars/is-space";


/**
 * Determines whether the string only contains whitespace.
 * @param s The string to check.
 * @returns `true` if the string only contains whitespace; otherwise, `false`.
 */
export function isSpace(s: string): boolean {
    for (let i = 0; i < s.length; i++) {
        if (!isSpaceAt(s, i)) {
            return false;
        }
    }

    return true;
}

/**
 * Determines whether the string is null, undefined, empty, or only contains whitespace.
 * @param s The string to check.
 * @returns `true` if the string is null, undefined, empty, or
 * only contains whitespace; otherwise, `false`.
 */
export function isNullOrSpace(s?: string | null): s is null | undefined | "" {
    if (s === null || s === undefined || s.length === 0) {
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        if (!isSpaceAt(s, i)) {
            return false;
        }
    }

    return true;
}
