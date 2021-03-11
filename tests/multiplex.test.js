"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("../src/movie");
var Movietype_1 = require("../src/Movietype");
var multiplex_1 = require("../src/multiplex");
test("BBB", function () {
  var mt = new Movietype_1.MovTyp("2D");
  var mov = new movie_1.Movie("Band Baja Baarat", mt);
  var mlx = new multiplex_1.multiplex();
  mlx.addMov(mov);
  expect(mlx.mo[0].getName()).toBe("Band Baja Baarat");
});
