import { MovTyp } from "./Movietype";

class Movie {
  movName: string;
  type: MovTyp;
  constructor(movnam: string, type: MovTyp) {
    this.movName = movnam;
    this.type = type;
  }
}

export { Movie };
