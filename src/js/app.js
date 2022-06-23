import { FPSmeter, getRandBetween, getRandBetweenHard, Throttle } from "./helpers/utils";
import { Cat } from "./models/cat";
import { WIDTH, HEIGHT, BG_COLOR, GENERATION_INTERVAL, CATS_TO_GENERATE } from "./helpers/consts";
import { Draw } from "./helpers/draw";

export default class App {
  constructor() {
    this.FPS = FPSmeter();
    this.FPS_TO_STOP = 10;
    this.canvas = document.querySelector('#canvas');
    this.ctx = canvas.getContext('2d');
    this.draw = new Draw(this.ctx);
    this.PAUSED = false;
    this.generateCatsThrottle = Throttle(this.generateCats.bind(this), GENERATION_INTERVAL);

    this.cats = [];

    this.generateCats();
    this.loop();
  }

  generateCats() {
    const number = getRandBetween(0, 360);
    let s = 65;
    let l = 55;

    for (let i = 0; i < CATS_TO_GENERATE; i++) { 
      let h = getRandBetweenHard(number - 10, number + 10); 
      let [width, height] = [15, 15];
      this.cats.push(
        new Cat(
          (WIDTH - width) / 2,
          (HEIGHT - height) / 2,
          width,
          height,
          `hsl(${h}, ${s}%, ${l}%)`
        )
      );
    }
  }

  enablePause() {
    this.PAUSED = true;
  }

  disablePause() {
    this.PAUSED = false;
  }

  togglePause() {
    this.PAUSED = !this.PAUSED;
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.update();
      this.render();
  
      this.loop();
    });
  }

  update() {
    if (this.FPS() < this.FPS_TO_STOP || this.PAUSED) {
      return;
    }

    this.generateCatsThrottle();
  }

  render() {
    if (this.FPS() < this.FPS_TO_STOP || this.PAUSED) {
      console.log(222)
      return;
    }
    this.draw.rect(0, 0, WIDTH, HEIGHT, BG_COLOR)

    for (let i = 0; i < this.cats.length; i++) {
      let cat = this.cats[i];
      cat.render(this.ctx);
    }

    const fpsText = `${this.FPS()} fps`;
    this.draw.textOverlay(
      fpsText, 0, 0, '#fff', '#000', 18
    )
    
    const catsText = `${this.cats.length} cats`;
    const offset = this.draw.measureText(catsText).width + 20;
    this.draw.textOverlay(
      catsText, WIDTH - offset, 0, '#fff', '#000', 18
    )
  }
}