import { MovTyp } from "./Movietype";
import { ThreeDim } from "./threeD";
import { TwoDim } from "./twoD";

class Movie {
  movName: string;
  type: MovTyp;
  constructor(movnam: string, type: any) {
    this.movName = movnam;
    this.type = type;
  }

  getName() {
    return this.movName;
  }
}

export { Movie };
