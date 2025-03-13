import { test } from "@bearz/testing";
import { ok } from "@bearz/assert";
import { equalFold } from "./equal.js";
test("strings::equalFold", () => {
    ok(equalFold("Hello", "hello"));
    ok(equalFold("Hello", "HELLO"));
});
