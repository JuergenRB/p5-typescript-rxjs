import { Sketch } from './sketch';
import { tap } from 'rxjs/operators';

let sketch = new Sketch();

sketch.onSetup.pipe(
  tap(p => p.createCanvas(400, 400)),
).subscribe(() => console.log("setup"));

sketch.onDraw.pipe(
  tap(p => p.background(220))
).subscribe();

sketch.run();
