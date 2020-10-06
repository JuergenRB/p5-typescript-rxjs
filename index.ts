import { Sketch } from './sketch';
import { tap } from 'rxjs/operators';
import { Balls } from './balls';

//Simple sketch - background only
let sketch = new Sketch();

sketch.onSetup.pipe(
  tap(p => p.createCanvas(400, 400)),
).subscribe(() => console.log("setup"));

sketch.onDraw.pipe(
  tap(p => p.background(220))
).subscribe();

sketch.run(document.getElementById("simple"));

//Complex sketch - balls
let ballsSketch = new Sketch();
let balls = new Balls(20);

ballsSketch.onSetup.pipe(
  tap(p => p.createCanvas(400, 400)),
  tap(p => balls.setup(p))
).subscribe();

ballsSketch.onDraw.pipe(
  tap(p => p.background(220)),
  tap(p => balls.draw(p))
).subscribe();

ballsSketch.run(document.getElementById("balls"));
