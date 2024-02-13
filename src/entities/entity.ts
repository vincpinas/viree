import Vec2 from "../math/vec2";

export default class Entity {
    public readonly type: string;
    protected pos: Vec2;
    protected speed: number;
    protected gravity: number

    constructor(type: string, pos: Vec2, gravity?: number, speed?: number) {
        this.type = type;
        this.pos = pos;
        this.gravity = gravity||0.1
        this.speed = speed||1
    }
}