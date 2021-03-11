import { Movie } from "./movie";
import { Imax } from "./imax";
import { MovTyp } from "./Movietype";
import { TwoDim } from "./twoD";

class Scrn {
  name: string;
  movie: Movie;
  constructor(name: string, mov: Movie) {
    this.name = name;
    this.movie = mov;
  }

  getname() {
    return this.name;
  }
}

export { Scrn };
