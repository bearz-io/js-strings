import { test } from "@bearz/testing";
import { ok } from "@bearz/assert";
import { startsWithFold } from "./starts_with.ts";

test("strings::startsWithFold", () => {
    ok(startsWithFold("Hello sdf", "hello"));
    ok(startsWithFold("Hello", "HELLO"));
});
