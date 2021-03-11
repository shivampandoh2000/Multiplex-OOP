import { MovTyp } from "./Movietype";

class ThreeDim extends MovTyp {
  price: number;
  constructor(name: string, price: number) {
    super(name);
    this.price = price;
  }

  getprice() {
    return this.price;
  }
}

export { ThreeDim };
