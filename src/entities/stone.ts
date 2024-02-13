import Entity from "./entity";
import { ENVIRONMENT_TYPE } from "../types";
import { AnimatedSprite } from "../gfx/sprite";
import Vec2 from "../math/vec2";
import Renderer from "../gfx/renderer";

export default class Stone extends Entity {
    protected sprite: AnimatedSprite;

    constructor(pos: Vec2) {
        super(ENVIRONMENT_TYPE, pos, 1.8);

        this.sprite = new AnimatedSprite({
            pos: new Vec2(this.pos.x, this.pos.y),
            src: "./rock.webp",
            width: 100,
            height: 100,
            sheet_height: 100,
            sheet_width: 2200,
            interval: 100,
            sm: 0.8
        });
    
        this.sprite.setAnimate(true)
    }

    // Methods
    // --------------------------
    public update(renderer: Renderer) {
        renderer.context?.drawImage(
            this.sprite.img,
            // image cut out location
            this.sprite.step, 0,
            // image cut out size
            this.sprite.width, this.sprite.height,
            // image location
            this.pos.x, this.pos.y,
            // rendered image size
            this.sprite.size_multiplier * this.sprite.width, this.sprite.size_multiplier * this.sprite.height
        );
    }
}