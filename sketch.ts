import p5 from 'p5';
import { Subject} from 'rxjs';

export class Sketch {
  private setupSubject = new Subject<p5>();
  private drawSubject = new Subject<p5>();

  public onSetup = this.setupSubject.asObservable();
  public onDraw = this.drawSubject.asObservable();

  constructor(){

  }

  private setup(p: p5): void {
    this.setupSubject.next(p);
  }

  private draw(p: p5): void {
    this.drawSubject.next(p);
  }

  public run(node?: HTMLElement): p5 {
    
    let p = new p5((p:p5) => {
      p.setup = () => this.setup(p);
      p.draw =  () => this.draw(p);
    }, node);
    return p;
  }

}