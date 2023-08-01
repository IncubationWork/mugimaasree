import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Box {
  x: number;
  y: number;
  size:number;
}

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  private boxesNew = new BehaviorSubject<Box[]>([]);
  public createbox = this.boxesNew.asObservable();


  constructor() {}

  addBoxes(box: Box) {
    const boxes = this.boxesNew.getValue();
    boxes.push(box);
    this.boxesNew.next(boxes);
  }

  deleteBox(box: Box) {
   const boxes = this.boxesNew.getValue().filter(b => b !==box);
   this.boxesNew.next(boxes);
  }

  updateBoxList(boxes:Box[])
  {
    this.boxesNew.next(boxes);
  }
   
  getBoxes(): Box[] {
    return this.boxesNew.getValue();
  }
  
}
