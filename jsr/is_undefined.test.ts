import { test } from "@bearz/testing";
import { nope, ok } from "@bearz/assert";
import { isUndefined } from "./is_undefined.ts";

test("strings::isUndefined returns true for undefined", () => {
    const s: string | undefined = undefined;
    ok(isUndefined(s));
});

test("strings::isUndefined returns false for empty string", () => {
    const s = "";
    nope(isUndefined(s));
});

test("strings::isUndefined returns false for non-empty string", () => {
    const s = "test";
    nope(isUndefined(s));
});
