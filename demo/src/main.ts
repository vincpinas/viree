import './style.css'
import Renderer from "../../src/gfx/renderer"
import Player from "../../src/entities/player"
import Vec2 from '../../src/math/vec2';
import Stone from "../../src/entities/stone"

import { random } from "../../src/utils"

const renderer = new Renderer({
  wrapper: document.querySelector("#app"),
  autoClear: true,
  autoResize: true
})

const player = new Player(new Vec2(window.innerWidth / 2.25, window.innerHeight / 2));

for (let i = 0; i < 50; i++) {
  const stone = new Stone(new Vec2(random(-400, 2500), random(0, 800)))

  renderer.add(stone)
  
}

renderer.add(player)


renderer.render()
