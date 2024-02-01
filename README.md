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

Viree is a simple javascript based game engine using the Canvas API.
This project is currently purely out of interest and I'm not planning to turn this into a public package for now.

* **<a href="#class-reference">Class Reference</a>**
  * <a href="#renderer">Renderer</a>
* **<a href="#future-plans">Future Plans</a>**

## Class Reference

### Renderer
```javascript
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



## Future Plans

| Feature        | 
| -------------  |
| Physics Engine |
| State Machine  |
| Audio System   |