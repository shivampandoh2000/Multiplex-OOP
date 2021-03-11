import { MovTyp } from "./Movietype";

class TwoDim extends MovTyp {
  price: number;
  constructor(name: string, price: number) {
    super(name);
    this.name = name;
    this.price = price;
  }

  getprice() {
    return this.price;
  }
}

export { TwoDim };
