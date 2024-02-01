import './style.css'
import Renderer from "../../src/gfx/renderer"
import Sprite from "../../src/gfx/sprite"
import Vec2 from '../../src/math/vec2';

const sprite = new Sprite({
  src: "./Rock-Sheet.webp",
  pos: new Vec2(400, 150),
  width: 100,
  height: 100,
  sheet_height: 100,
  sheet_width: 2200,
  interval: 60,
  offset: 4
})

const renderer = new Renderer({
  wrapper: document.querySelector("#app"),
  autoClear: true,
  autoResize: true
})


renderer.add(sprite)

renderer.render()
