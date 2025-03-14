import { test } from "@bearz/testing";
import { ok } from "@bearz/assert";
import { equal, equalFold } from "./equal.ts";

test("strings::equalFold", () => {
    ok(equalFold("Hello", "hello"));
    ok(equalFold("Hello", "HELLO"));
});

test("strings::equal", () => {
    ok(equal("Hello", "Hello"));
    ok(!equal("Hello", "HELLO"));
});
