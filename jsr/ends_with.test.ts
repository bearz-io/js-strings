import { test } from "@bearz/testing";
import { ok } from "@bearz/assert";
import { endsWithFold } from "./ends_with.ts";

test("strings::endsWithFold", () => {
    ok(endsWithFold("sdfsdf Hello", "hello"));
    ok(endsWithFold("Hello", "HELLO"));
});
