"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("../src/movie");
var imax_1 = require("../src/imax");
var twoD_1 = require("../src/twoD");
var multiplex_1 = require("../src/multiplex");
var normal_1 = require("../src/normal");
var threeD_1 = require("../src/threeD");
test("Price of Jigarthanda", function () {
    var mt = new twoD_1.TwoDim("2D", 0);
    var mov = new movie_1.Movie("Jigarthanda", mt);
    var scr = new normal_1.Normal("Sathyam", mov, 120);
    var mlx = new multiplex_1.multiplex();
    mlx.addMov(mov);
    mlx.addScr(scr);
    mlx.addAgg(scr, mov);
    expect(mlx.aggr[0]).toBe(120);
});
test("Price of Jungle Book", function () {
    var mt = new threeD_1.ThreeDim("3D", 30);
    var mov = new movie_1.Movie("Jungle Book", mt);
    var scr = new imax_1.Imax("Santham", mov, 400);
    var mlx = new multiplex_1.multiplex();
    mlx.addMov(mov);
    mlx.addScr(scr);
    mlx.addAgg(scr, mov);
    expect(mlx.aggr[0]).toBe(430);
});
