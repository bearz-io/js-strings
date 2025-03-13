import { test } from "@bearz/testing";
import { equal } from "@bearz/assert";
import { indexOfFold, indexOf } from "./index_of.ts";

test("strings::indexOfFold", () => {
    equal(0, indexOfFold("Hello sdf", "hello"));
    equal(0, indexOfFold("Hello", "HELLO"));
    equal(7, indexOfFold("sdfsdf Hello", "hello"));
});


test("strings::indexOf", () => {
    equal(-1, indexOf("Hello sdf", "hello"));
    equal(-1, indexOf("Hello", "HELLO"));
    equal(1, indexOf(" HELLO ", "HELLO"));
    equal(7, indexOf("sdfsdf Hello", "Hello"));
    equal(-1, indexOf("Hello", "e", 5));
    equal(1, indexOf("Hello", "e", 1));
});