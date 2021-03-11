import { Movie } from "./movie";
import { Imax } from "./imax";
import { MovTyp } from "./Movietype";
import { TwoDim } from "./twoD";
import { Scrn } from "./screen";

class multiplex {
  scr: Array<any>;
  mo: Array<Movie>;
  aggr: Array<any>;
  constructor() {
    this.scr = [];
    this.mo = [];
    this.aggr = [];
  }

  addScr(scr: Scrn) {
    this.scr.push(scr);
  }

  addMov(mov: Movie) {
    this.mo.push(mov);
  }

  addAgg(scr: Scrn, mov: Movie) {
    if (scr.name === "Santham") {
      if (mov.type.name === "3D") {
        this.aggr.push(400 + 30);
      } else {
        this.aggr.push(400 + 0);
      }
    } else {
      if (mov.type.name === "3D") {
        this.aggr.push(120 + 30);
      } else {
        this.aggr.push(120 + 0);
      }
    }
  }
}

export { multiplex };
