import { Movie } from "../src/movie";
import { Imax } from "../src/imax";
import { MovTyp } from "../src/Movietype";
import { TwoDim } from "../src/twoD";
import { Scrn } from "../src/screen";
import { multiplex } from "../src/multiplex";

test("BBB", () => {
  let mt = new MovTyp("2D");
  let mov = new Movie("Band Baja Baarat", mt);
  let mlx = new multiplex();
  mlx.addMov(mov);
  expect(mlx.mo[0].getName()).toBe("Band Baja Baarat");
});
