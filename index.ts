import p5 from 'p5'

function sketch(p: p5) {
  p.setup = () => {
    p.createCanvas(400, 400);
  }

  p.draw = () => {
    p.background(220);
  }
}

new p5(sketch)