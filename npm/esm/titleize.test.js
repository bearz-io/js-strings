import { test } from "@bearz/testing";
import { equal } from "@bearz/assert";
import { titleize } from "./titleize.js";
test("strings::titleize", () => {
    equal("Hello World", titleize("hello_world"));
    equal("Hello World", titleize("HELLoWorld"));
    equal("Hello World", titleize("HELLo-World"));
    equal("Hello World", titleize("HELLo World"));
    equal("Bob the Og", titleize("BobTheOG"));
});
