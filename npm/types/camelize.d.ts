import { type CamelizeOptions } from "@bearz/slices/camelize";
/**
 * Converts the string to camel case. This is primarily for converting
 * code to camel case.
 * @param value The string to camelize.
 * @param options The options for the function.
 * @returns A string in camel case.
 */
export declare function camelize(value: string, options?: CamelizeOptions): string;
