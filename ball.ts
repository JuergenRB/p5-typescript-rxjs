import p5 from 'p5';

export class Ball {
  private direction = 1;
  constructor(private position: p5.Vector, private diameter: number, private speed?: p5.Vector) {

  }

  private move(){
    if(this.speed == null){ return; }
    this.position = this.position.add(p5.Vector.mult(this.speed, this.direction)); 
  }

  private turn(p: p5){
    if (this.position.x < 0){
      this.position.x = 0;
      this.direction = -this.direction;
    }

    if (this.position.x > p.width){
      this.position.x = p.width;
      this.direction = -this.direction;
    }

    if (this.position.y < 0){
      this.position.y = 0;
      this.direction = -this.direction;
    }

    if (this.position.y > p.height){
      this.position.y = p.height;
      this.direction = -this.direction;
    }
  }

  draw(p: p5): void{
      p.ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
      this.move();
      this.turn(p);
  }
}