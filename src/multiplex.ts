import { Movie } from "./movie";
import { Imax } from "./imax";
import { MovTyp } from "./Movietype";
import { TwoDim } from "./twoD";
import { Scrn } from "./screen";

class multiplex {
  scr: Scrn;
  mo: Movie;
  constructor(scr: Scrn, mov: Movie) {
    this.scr = scr;
    this.mo = mov;
  }
}
