import { Movie } from "../src/movie";
import { Imax } from "../src/imax";
import { MovTyp } from "../src/Movietype";
import { TwoDim } from "../src/twoD";
import { Scrn } from "../src/screen";
import { multiplex } from "../src/multiplex";
import { Normal } from "../src/normal";
import { ThreeDim } from "../src/threeD";

test("Price of Jigarthanda", () => {
  let mt = new TwoDim("2D", 0);
  let mov = new Movie("Jigarthanda", mt);
  let scr = new Normal("Sathyam", mov, 120);
  let mlx = new multiplex();
  mlx.addMov(mov);
  mlx.addScr(scr);
  mlx.addAgg(scr, mov);
  expect(mlx.aggr[0]).toBe(120);
});

test("Price of Jungle Book", () => {
  let mt = new ThreeDim("3D", 30);
  let mov = new Movie("Jungle Book", mt);
  let scr = new Imax("Santham", mov, 400);
  let mlx = new multiplex();
  mlx.addMov(mov);
  mlx.addScr(scr);
  mlx.addAgg(scr, mov);
  expect(mlx.aggr[0]).toBe(430);
});
