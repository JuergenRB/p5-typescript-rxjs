import p5 from 'p5';
import { Ball } from './ball';

export class Balls {
  private balls: Array<Ball> = [];


  constructor(private ballCount: number){}

  setup(p: p5): void {
    for (let i = 0; i < this.ballCount; i++) {
      this.balls.push(new Ball(p.createVector(p.random(p.width), p.random(p.height)), p.random(10, 30), p.createVector(p.random(-2,2), p.random(-2,2))));
    }
  }

  draw(p: p5): void {
    for (let i = 0; i < this.balls.length; i++) {
      this.balls[i].draw(p);
    }
  }
}