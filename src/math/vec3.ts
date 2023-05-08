export default class Vec3 {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  set(x: number, y: number, z: number): Vec3 {
    this.x = x;
    this.y = y;
    this.z = z;
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

  mul(val: number, target?: string) {
    switch (target) {
      case "x":
        return this.x *= val
      case "y":
        return this.y *= val
      case "z":
        return this.z *= val
      default:
        this.x *= val; this.y *= val; this.z *= val;
        return this;
    }
  }

  clone(): Vec3 {
    return new Vec3(this.x, this.y, this.z);
  }
}