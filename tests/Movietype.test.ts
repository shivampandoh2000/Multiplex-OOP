import { Movie } from "../src/movie";
import { Imax } from "../src/imax";
import { MovTyp } from "../src/Movietype";
import { TwoDim } from "../src/twoD";
import { Scrn } from "../src/screen";
import { multiplex } from "../src/multiplex";

test("Get Movie Jigarthanda", () => {
  let mt: MovTyp = new MovTyp("Jigarthanda");
  let expected: string = mt.getname();
  expect(expected).toBe("Jigarthanda");
});
