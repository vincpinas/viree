export default class Vec2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  set(x: number, y: number): Vec2 {
    this.x = x;
    this.y = y;
    return this;
  }

  setX(x: number): number {
    this.x = x;
    return this.x;
  }

  setY(y: number): number {
    this.y = y;
    return this.y;
  }

  clone(): Vec2 {
    return new Vec2(this.x, this.y);
  }

  mul(val: number, target?: string) {
    switch (target) {
      case "x":
        return this.x *= val
      case "y":
        return this.y *= val
      default:
        this.x *= val; this.y *= val;
        return this;
    }
  }
}