import { test } from "@bearz/testing";
import { equal } from "@bearz/assert";
import { dasherize } from "./dasherize.ts";

test("strings::dasherize", () => {
    equal("hello-world", dasherize("hello_world"));
    equal("hello-world", dasherize("helloWorld"));
    equal("hello-world", dasherize("hello-world"));
    equal("hello-world", dasherize("HELLO-WORLD"));

    equal("hello-world", dasherize("hello world"));
    equal("hello-world", dasherize("hello  world"));
    equal("hello-world", dasherize("hello   world"));
});
