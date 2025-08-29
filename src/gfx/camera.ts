import Vec2 from "../math/vec2";

export default class Camera {
	public pos: Vec2;
	public width: number;
	public height: number;

	constructor(pos: Vec2, width: number, height: number) {
		this.pos = pos;
		this.width = width;
		this.height = height;
	}
}
