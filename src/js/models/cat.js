import { getRandColor, getRandBetween } from "../helpers/utils";
import { WIDTH, HEIGHT, MOVE_TYPES } from "../helpers/consts";

export class Cat {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxSpeed = 16;
    this.minSpeed = 8;
    this.speed = getRandBetween(this.minSpeed, this.maxSpeed);
    this.angle = getRandBetween(0, 360) * Math.PI / 180;
    this.vx = this.speed * Math.cos(this.angle) * Math.random() || getRandBetween(-3, 3);
    this.vy = this.speed * Math.sin(this.angle) * Math.random() || getRandBetween(-3, 3);
    this.ay = 0.3;
    this.color = c || getRandColor();
    this.moveType = MOVE_TYPES.bounce;
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

    let offset = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(
      this.x - offset,
      this.y - offset,
      this.w + offset * 2,
      this.h + offset * 2
    );

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}