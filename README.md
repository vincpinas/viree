<p align="center">
  <img src="./3000.png" alt="ViRee Banner" width="400px"/>
</p>
<p align="center">
  <i>
    <strong>bad typescript game engine</strong>
  </i>
</p>

***

## Overview

Viree is game made using a simple javascript based game engine using the Canvas API written from sratch.
This project is currently purely out of interest and I'm not planning to turn this into something serious.

* **<a href="#class-reference">Class Reference</a>**
  * <a href="#renderer">Renderer</a>
* **<a href="#future-plans">Future Plans</a>**

## Class Reference

### Renderer
```javascript
import Renderer from "gfx/renderer"

const renderer = new Renderer({
  wrapper: document.querySelector("#app"), // Wrapper element to place the canvas in.
  autoClear: true, // Automatically clear canvas before each render loop, default: true
  autoResize: true // Automatically resizes canvas to the innerHeight and innerWidth of the window
})
 ```

#### ``Renderer.add()``
```javascript
new Renderer().add(Object)
```
The add method adds the **update method** of any object like for instance ``Entity`` or ``Sprite`` to the canvas. An update method should contain all the logic you want a object to do each time before drawing a frame.

#### ``Renderer.render()``
The render method clears the canvas if ``autoClear`` is turned on and executes all the ``update functions`` every loop.

#### ``Renderer.GetContext()``
This method returns the 2d context of the current canvas element.

#### ``Renderer.setRunning(boolean)``
This method freezes the render loop when set to false and resumes the render loop when setting to true.

#### ``Renderer.setSize(width: number, height: number)``
This method explicitly sets the size of the canvas element in pixels. 
*Note that this will only work if auto resize is not turned on.*

### Sprite / Animated Sprite
```javascript
import { Sprite, AnimatedSprite } from "gfx/sprite"

new Sprite({
  pos: new Vec2(this.pos.x, this.pos.y),
  src: "./player.png",
  width: 48,
  height: 64,
  sheet_height: 256,
  sheet_width: 144,
  interval: 200,
  sm: 3
});
 ```
``Sprite`` and ``AnimatedSprite`` are essentially the same class and take in the same paramaters, but the animated sprite automatically cycles through animations when ``AnimatedSprite.animate`` is equal to true.
The default value of this property is set to false and you're expected to turn it on yourself when needing to cycle through the animation when for instance the player is moving.

#### ``AnimatedSprite.setAnimate(newState: boolean)``
This method can be used to set the ``animate`` property of ``AnimatedSprite`` to true or false.


## Future Plans

| Feature        | 
| -------------  |
| Physics Engine |
| State Machine  |
| Audio System   |