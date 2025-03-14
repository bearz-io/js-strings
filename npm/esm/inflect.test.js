import { test } from "@bearz/testing";
import { equal } from "@bearz/assert";
import { pluralize, singularize } from "./inflect.js";
test("strings::pluralize", () => {
    equal(pluralize("accommodation"), "accommodation");
    equal(pluralize("people"), "people");
    equal(pluralize("men"), "men");
    equal(pluralize("women"), "women");
    equal(pluralize("woman"), "women");
    equal(pluralize("person"), "people");
    equal(pluralize("octopus"), "octopuses");
    equal(pluralize("human"), "humans");
    equal(pluralize("aircraft"), "aircraft");
    equal(pluralize("luck"), "luck");
    equal(pluralize("Hat"), "Hats");
    equal(pluralize("life"), "lives");
    equal(pluralize("bath"), "baths");
    equal(pluralize("calf"), "calves");
    equal(pluralize("focus"), "focuses");
    equal(pluralize("foot"), "feet");
    equal(pluralize("book"), "books");
    equal(pluralize("goose"), "geese");
    equal(pluralize("tooth"), "teeth");
    equal(pluralize("teeth"), "teeth");
    equal(pluralize("knife"), "knives");
    equal(pluralize("half"), "halves");
    equal(pluralize("cave"), "caves");
    equal(pluralize("save"), "saves");
    equal(pluralize("street"), "streets");
    equal(pluralize("streets"), "streets");
    equal(pluralize("data"), "data");
    equal(pluralize("meta"), "meta");
    equal(pluralize("summons"), "summonses");
    equal(pluralize("whereas"), "whereases");
    equal(pluralize("index"), "indices");
    equal(pluralize("matrix"), "matrices");
    equal(pluralize("vertex"), "vertices");
    equal(pluralize("canvas"), "canvases");
    equal(pluralize("campus"), "campuses");
    equal(pluralize("campuses"), "campuses");
    equal(pluralize("criterion"), "criteria");
    equal(pluralize("criteria"), "criteria");
    equal(pluralize("genus"), "genera");
    equal(pluralize("genera"), "genera");
    equal(pluralize("bonus"), "bonuses");
    equal(pluralize("grammar"), "grammars");
    equal(pluralize("drive"), "drives");
    equal(pluralize("database"), "databases");
});
test("strings::singularize", () => {
    equal(singularize("status"), "status");
    equal(singularize("child"), "child");
    equal(singularize("children"), "child");
    equal(singularize("address"), "address");
    equal(singularize("man"), "man");
    equal(singularize("woman"), "woman");
    equal(singularize("women"), "woman");
    equal(singularize("person"), "person");
    equal(singularize("people"), "person");
    equal(singularize("movies"), "movie");
    equal(singularize("queries"), "query");
    equal(singularize("octopuses"), "octopus");
    equal(singularize("Hats"), "Hat");
    equal(singularize("lives"), "life");
    equal(singularize("baths"), "bath");
    equal(singularize("calves"), "calf");
    equal(singularize("feet"), "foot");
    equal(singularize("focus"), "focus");
    equal(singularize("books"), "book");
    equal(singularize("geese"), "goose");
    equal(singularize("teeth"), "tooth");
    equal(singularize("tooth"), "tooth");
    equal(singularize("knives"), "knife");
    equal(singularize("halves"), "half");
    equal(singularize("caves"), "cave");
    equal(singularize("saves"), "save");
    equal(singularize("street"), "street");
    equal(singularize("streets"), "street");
    equal(singularize("data"), "datum");
    equal(singularize("meta"), "metum");
    equal(singularize("whereases"), "whereas");
    equal(singularize("matrices"), "matrix");
    equal(singularize("vertices"), "vertex");
    equal(singularize("canvases"), "canvas");
    equal(singularize("campuses"), "campus");
    equal(singularize("campus"), "campus");
    equal(singularize("criteria"), "criterion");
    equal(singularize("criterion"), "criterion");
    equal(singularize("genera"), "genus");
    equal(singularize("genus"), "genus");
    equal(singularize("minus"), "minus");
    equal(singularize("bonuses"), "bonus");
    equal(singularize("grammars"), "grammar");
    equal(singularize("drives"), "drive");
    equal(singularize("databases"), "database");
});
