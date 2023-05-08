export default class Vec4 {
  x: number;
  y: number;
  z: number;
  w: number;

  constructor(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  set(x: number, y: number, z: number, w: number): Vec4 {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
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

  setZ(z: number): number {
    this.z = z;
    return this.z;
  }

  setW(w: number): number {
    this.w = w;
    return this.w;
  }

  mul(val: number, target?: string) {
    switch (target) {
      case "x":
        return this.x *= val
      case "y":
        return this.y *= val
      case "z":
        return this.z *= val
      case "w":
        return this.w *= val
      default:
        this.x *= val; this.y *= val; this.z *= val; this.w *= val;
        return this;
    }
  }

  clone(): Vec4 {
    return new Vec4(this.x, this.y, this.z, this.w);
  }
}