import Scene from "./scene.ts";

interface RENDERER_PARAMATERS {
	wrapper?: Element | null;
	autoClear?: boolean;
	autoResize?: boolean;
	updateFunctions?: Function[];
}

const createCanvasElement = (): HTMLCanvasElement => {
	let canvas = document.createElement("canvas");
	canvas.setAttribute("xlmns", "http://www.w3.org/1999/xhtml");
	return canvas;
};

export default class Renderer {
	public canvas: HTMLCanvasElement;
	public context: CanvasRenderingContext2D | null = null;
	public scene: Scene | null = null;
	protected autoClear: boolean;
	protected running: boolean;
	protected updateFunctions: Function[];

	constructor(params: RENDERER_PARAMATERS = {}) {
		this.autoClear = params.autoClear || true;
		this.running = true;
		this.updateFunctions = params.updateFunctions || [];

		// canvas
		const wrapper = params.wrapper;
		this.canvas = createCanvasElement();
		this.canvas.className = "viree-canvas";
		this.setSize(window.innerWidth, window.innerHeight);

		// Context
		let context = this.canvas.getContext("2d");

		if (context) {
			this.context = context;
			this.context.imageSmoothingEnabled = false;
		}

		if (wrapper) {
			wrapper.classList.add("viree-canvas__wrapper");
			wrapper.appendChild(this.canvas);
		} else {
			document.body.appendChild(this.canvas);
		}

		window.addEventListener("resize", () => {
			if (params.autoResize === false) return;
			this.setSize(window.innerWidth, window.innerHeight);
		});
	}

	setSize(width: number, height: number) {
		this.canvas.width = width;
		this.canvas.height = height;
	}

	setRunning(newState: boolean) {
		this.running = newState;
		this.render();
		return this.running;
	}

	add(Object: any) {
		if (typeof Object.update !== "function") {
			console.warn(`No update function has been provided for ${Object}`);
			return this;
		}

		this.updateFunctions.push(() => Object.update(this));
		return this;
	}

	render() {
		if (!this.context) return;

		if (!this.running) {
			requestAnimationFrame(() => this.render());
			return;
		}

		if (this.autoClear) {
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		}

		for (let i = 0; i < this.updateFunctions.length; i++) {
			this.updateFunctions[i]();
		}

		requestAnimationFrame(() => this.render());
	}
}
