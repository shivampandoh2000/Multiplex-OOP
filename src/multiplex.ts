import { Movie } from "./movie";
import { Imax } from "./imax";
import { MovTyp } from "./Movietype";
import { TwoDim } from "./twoD";
import { Scrn } from "./screen";

class multiplex {
  scr: Array<Scrn>;
  mo: Array<Movie>;
  constructor() {
    this.scr = [];
    this.mo = [];
  }

  addScr(scr: Scrn) {
    this.scr.push(scr);
  }

  addMov(mov: Movie) {
    this.mo.push(mov);
  }
}

export { multiplex };
