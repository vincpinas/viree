import './style.css'
import { Renderer } from "../../src/gfx/renderer"

let renderer = new Renderer({
  wrapper: document.querySelector("#app")
});     

renderer.addUpdateFunction(() => {

})

renderer.render()
