interface RENDERER_PARAMATERS {
  wrapper?: Element | null;
  autoClear?: boolean;
  running?: boolean;
  updateFunctions?: Function[]
}

const createCanvasElement = (): HTMLCanvasElement => {
  let canvas = document.createElement("canvas");
  canvas.setAttribute("xlmns", "http://www.w3.org/1999/xhtml")
  return canvas;
}

export class Renderer {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  autoClear: boolean;
  running: boolean;
  updateFunctions: Function[];

  constructor(params: RENDERER_PARAMATERS = {}) {
    this.autoClear = params.autoClear || true;
    this.running = params.running || false;
    this.updateFunctions = params.updateFunctions || [];

    // canvas
    const wrapper = params.wrapper;
    this.canvas = createCanvasElement();
    this.canvas.className = "viree-canvas";

    // Context
    let context = this.canvas.getContext("2d")
    context ? this.context = context : this.context = null;

    if (wrapper) {
      wrapper.classList.add("viree-canvas__wrapper");
      wrapper.appendChild(this.canvas)
    } else {
      document.body.appendChild(this.canvas);
    }
  }

  getCanvas() {
    return this.canvas;
  }

  getContext() {
    return this.context;
  }

  addUpdateFunction(func: Function) {
    this.updateFunctions.push(func);
    console.log(this.updateFunctions)
  }

  render() {
    if(!this.context) return;
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.updateFunctions.length; i++) {
      console.log(`executing ${this.updateFunctions[i]}`)
      this.updateFunctions[i]();
    }

    requestAnimationFrame(() => this.render())
  }
}