import { FPSmeter, Throttle } from "./helpers/utils";
import { Cat } from "./models/cat";
import { WIDTH, HEIGHT, BG_COLOR, GENERATION_INTERVAL, CATS_TO_GENERATE } from "./helpers/consts";
import { Draw } from "./helpers/draw";

const fpsmeter = FPSmeter();
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let cats = [];
let fps = 0;
let paused = false;

export function init() {
  generateCats();
  generateCatsThrottle = Throttle(() => {
    console.log(`Generated: ${CATS_TO_GENERATE} cats`);
    generateCats();
  }, GENERATION_INTERVAL);
  loop();
}

let generateCatsThrottle = null;

function generateCats() {
  for (let i = 0; i < CATS_TO_GENERATE; i++) {
    let [width, height] = [40, 50];
    cats.push(
      new Cat(
        (WIDTH - width) / 2,
        (HEIGHT - height) / 2,
        width,
        height
      )
    );
  }
}

function enablePause() {
  paused = true;
}

function disablePause() {
  paused = false;
}

function togglePause() {
  paused = !paused;
}

function loop() {
  window.requestAnimationFrame(function () {
    update();
    render();

    loop();
  });
}

function update() {
  fps = fpsmeter();
  if (fps < 10) {
    return;
  }

  generateCatsThrottle();
}

function render() {
  if (paused) return;
  rect(0, 0, WIDTH, HEIGHT, BG_COLOR)

  for (let i = 0; i < cats.length; i++) {
    let cat = cats[i];
    cat.render(ctx);
  }

  let textSize = ctx.measureText(`${fps} fps`);
  rect(0, 0, textSize.width + 20, 30, '#000');
  text(`${fps} fps`, 10, 20, '#fff', '600 18px monospace');

  textSize = ctx.measureText(`${cats.length} cats`);
  rect(WIDTH - textSize.width - 20, 0, textSize.width + 20, 30, '#000');
  text(`${cats.length} cats`, WIDTH - textSize.width - 10, 20, '#fff', '600 18px monospace');
}

class App {
  constructor() {

  }

  update() {

  }

  render() {

  }
}