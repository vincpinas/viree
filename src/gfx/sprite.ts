import Vec2 from "../../src/math/vec2"

interface SPRITE_PARAMATERS {
    pos: Vec2;
    src: string;
    width: number;
    height: number;
    sheet_width: number;
    sheet_height: number;
    interval?: number;
    sm?: number;
    offset?: number;
}

export class Sprite {
    public pos: Vec2;
    public readonly img: HTMLImageElement;
    public readonly width: number;
    public readonly height: number;
    public readonly sheet_width: number;
    public readonly sheet_height: number;
    public readonly interval: number;
    public readonly size_multiplier: number;

    constructor(params: SPRITE_PARAMATERS) {
        this.pos = params.pos;
        this.width = params.width;
        this.height = params.height;
        this.sheet_width = params.sheet_width;
        this.sheet_height = params.sheet_height;
        this.interval = params.interval || 60;
        this.size_multiplier = params.sm || 1;
        this.img = new Image(this.width, this.height);
        this.img.src = params.src;
    }
}

export class AnimatedSprite extends Sprite {
    public step: number;
    protected animate: boolean;

    constructor(params: SPRITE_PARAMATERS) {
        super(params)
        this.step = 0 + ((params.offset || 0) * this.width);
        this.animate = false;

        this.init()
    }

    init() {
        setInterval(() => {
            if (this.step < (this.sheet_width - this.width) && this.animate) this.step += this.width;
            else this.step = 0;
        }, this.interval)
    }

    setAnimate(newState: boolean) {
        this.animate = newState;
    }
}