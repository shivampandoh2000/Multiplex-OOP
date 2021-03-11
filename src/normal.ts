import { Scrn } from "./screen";
import { Movie } from "./movie";

class Normal extends Scrn {
  price: number;
  constructor(name: string, mov: Movie, price: number) {
    super(name, mov);
    this.price = price;
  }

  getprice() {
    return this.price;
  }
}

export { Normal };
