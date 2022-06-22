import { FPSmeter, Throttle } from "./helpers/utils";
import { Cat } from "./models/cat";
import { WIDTH, HEIGHT, BG_COLOR, GENERATION_INTERVAL, CATS_TO_GENERATE } from "./helpers/consts";
import { Draw } from "./helpers/draw";

export default class App {
  constructor() {
    this.FPS = FPSmeter();
    this.canvas = document.querySelector('#canvas');
    this.ctx = canvas.getContext('2d');
    this.draw = new Draw(this.ctx);
    this.paused = false;
    this.generateCatsThrottle = Throttle(this.generateCats.bind(this), GENERATION_INTERVAL);

    this.cats = [];

    this.generateCats();
    this.loop();
  }

  generateCats() {
    for (let i = 0; i < CATS_TO_GENERATE; i++) {
      let [width, height] = [40, 50];
      this.cats.push(
        new Cat(
          (WIDTH - width) / 2,
          (HEIGHT - height) / 2,
          width,
          height
        )
      );
    }
  }

  enablePause() {
    this.paused = true;
  }

  disablePause() {
    this.paused = false;
  }

  togglePause() {
    this.paused = this.paused;
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.update();
      this.render();
  
      this.loop();
    });
  }

  update() {
    if (this.FPS() < 10) {
      return;
    }

    this.generateCatsThrottle();
  }

  render() {
    // if (paused) return;
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