import { Scrn } from "./screen";
import { Movie } from "./movie";

class Imax extends Scrn {
  price: number;
  constructor(name: string, mov: Movie, price: number) {
    super(name, mov);
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

export { Imax };
