import Vec2 from "../math/vec2";

export default class Entity {
	public readonly type: string;
	public readonly baseSpeed: number;
	public readonly baseGravity: number;
	protected pos: Vec2;
	protected speed: number;
	protected gravity: number;

	constructor(type: string, pos: Vec2, gravity?: number, speed?: number) {
		this.type = type;
		this.pos = pos;

		this.baseSpeed = 1;
		this.baseGravity = 0.8;

		this.gravity = gravity || this.baseGravity;
		this.speed = speed || this.baseSpeed;
	}
}
