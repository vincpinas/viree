import Entity from "./entity";
import { PLAYER_TYPE } from "../types";
import { AnimatedSprite } from "../gfx/sprite";
import Vec2 from "../math/vec2";
import Renderer from "../gfx/renderer";
import Camera from "../gfx/camera";

export default class Player extends Entity {
	protected input: Set<string>;
	protected sprite: AnimatedSprite;
	protected spriteRow: number;
	protected jumping: boolean;
	protected velocity: Vec2;
	protected camera: Camera;

	constructor(pos: Vec2) {
		super(PLAYER_TYPE, pos, 1.8);

		this.input = new Set();
		this.spriteRow = 0;
		this.velocity = new Vec2(0.1, 0.1);
		this.jumping = false;
		this.camera = new Camera(new Vec2(this.pos.x - 40, this.pos.y), 200, 200);
		this.sprite = new AnimatedSprite({
			pos: new Vec2(this.pos.x, this.pos.y),
			src: "./player.png",
			width: 48,
			height: 64,
			sheet_height: 256,
			sheet_width: 144,
			interval: 200,
			size_multiplier: 2.5,
		});

		this._registerInputEvent();
	}

	// Helpers
	// --------------------------
	private speedPercentage(speedPercentage: number) {
		return this.baseSpeed + this.baseSpeed * (speedPercentage / 100);
	}

	// Methods
	// --------------------------
	public update(renderer: Renderer) {
		if (!renderer.context) return;

		this.handleInput();
		this.moveCamera();

		renderer.context.fillStyle = "rgb(0, 0, 255, 0.2)";

		renderer.context.fillRect(
			this.camera.pos.x,
			this.camera.pos.y,
			this.camera.width,
			this.camera.height
		);

		renderer.context.drawImage(
			// image
			this.sprite.img,
			// image cut out location
			this.sprite.step,
			this.spriteRow,
			// image cut out size
			this.sprite.width,
			this.sprite.height,
			// image location on canvas
			this.pos.x,
			this.pos.y,
			// rendered image size
			this.sprite.size_multiplier * this.sprite.width,
			this.sprite.size_multiplier * this.sprite.height
		);
	}

	private handleInput() {
		if (
			this.input.size > 0 &&
			(this.input.has("KeyD") || this.input.has("KeyA"))
		)
			this.sprite.setAnimate(true);
		else this.sprite.setAnimate(false);

		if (this.input.has("KeyD")) {
			this.pos.x += this.speed;
			this.spriteRow = this.sprite.height * 1;
		}
		if (this.input.has("KeyA")) {
			this.pos.x -= this.speed;
			this.spriteRow = this.sprite.height * 3;
		}

		if (this.input.has("ShiftLeft")) this.speed = this.speedPercentage(140);
		else this.speed = this.baseSpeed;

		if (this.input.has("Space") && this.jumping === false) {
			this.jumping = true;

			let starting_pos = this.pos.y;
			let starting_velocity = this.velocity.y;

			this.pos.setY(starting_pos - 150);

			let interval = setInterval(() => {
				this.pos.y += this.velocity.y;
				this.velocity.y += this.gravity;

				if (this.pos.y >= starting_pos) {
					clearInterval(interval);
					this.pos.setY(starting_pos);
					this.velocity.setY(starting_velocity);
					this.jumping = false;
				}
			}, 15);
		}

		return this.input;
	}

	private moveCamera() {
		this.camera.pos.x = this.pos.x - 40;
		this.camera.pos.y = this.pos.y;
	}

	// Events
	// --------------------------
	private _registerInputEvent() {
		addEventListener("keydown", (e) => {
			this.input.add(e.code);
		});

		addEventListener("keyup", (e) => {
			this.input.delete(e.code);
		});
	}
}
