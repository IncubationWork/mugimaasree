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

  private selectedBoxSource = new BehaviorSubject<Box | null>(null);
  selectedBox$ = this.selectedBoxSource.asObservable();
  
  constructor() {
  const defaultBoxes:Box[]=[
    {x:20,y:30,size:20},
    {x:157,y:140,size:20},
    {x:202,y:300,size:20},
    {x:403,y:219,size:20},
    {x:18,y:100,size:20}];
  this.boxesNew.next(defaultBoxes);
  }

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
  setSelectedBox(box: Box | null) {
    this.selectedBoxSource.next(box);
  }
}