import { getRandColor, getRandBetween, getRandBetweenHard } from "../helpers/utils";
import { WIDTH, HEIGHT, MOVE_TYPES } from "../helpers/consts";

export class Cat {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxSpeed = 10;
    this.minSpeed = 5;
    this.speed = getRandBetween(this.minSpeed, this.maxSpeed);
    this.angle = getRandBetween(0, 360) * Math.PI / 180;
    this.vx = this.speed * Math.cos(this.angle) || getRandBetween(-3, 3);
    this.vy = this.speed * Math.sin(this.angle) || getRandBetween(-3, 3);
    this.ay = 0.3;
    this.color = getRandColor();
    this.moveType = 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.moveType == MOVE_TYPES.bounce) {
      this.bounceMove();
    } else {
      this.infinityMove();
    }    
  }

  bounceMove() {
    if (this.x < 0 || this.x + this.w > WIDTH)
      this.vx *= -1;

    if (this.y < 0 || this.y + this.h > HEIGHT)
      this.vy *= -1;
  }

  infinityMove() {
    if(this.x > WIDTH) this.x = -this.w;
    if(this.x + this.w < 0) this.x = WIDTH;
    if(this.y > HEIGHT) this.y = -this.h;
    if(this.y + this.h < 0) this.y = HEIGHT;
  }

  render(ctx) {
    this.update();

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}