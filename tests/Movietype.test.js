"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Movietype_1 = require("../src/Movietype");
test("Get Movie Jigarthanda", function () {
    var mt = new Movietype_1.MovTyp("Jigarthanda");
    var expected = mt.getname();
    expect(expected).toBe("Jigarthanda");
});
