import { Component} from '@angular/core';
import { BoxService,Box } from '../box.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  selectedBox: Box | null = null; 

  constructor(public boxService: BoxService,private location: Location,) {}

  onCreateBox(event: MouseEvent) {
    const container = document.querySelector('.create') as HTMLElement;
    const containerRect = container.getBoundingClientRect();
    const boxSize = 20;

    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;

    if (x < 0 || y < 0 || x + boxSize > containerRect.width || y + boxSize > containerRect.height) {
      return;
    }

    const newBox: Box = { x, y, size: boxSize };

    if (this.checkOverlapping(newBox, this.boxService.getBoxes())) {
      return;
    }

    this.boxService.addBoxes(newBox);
    this.location.go(`/input/x=${x}&y=${y}`);
  }

  onDeleteBox(box: Box) {
    this.boxService.deleteBox(box);
  }

  checkOverlapping(newBox: Box, boxes: Box[]): boolean {
    for (const box of boxes) {
      const isOverlappingX = newBox.x + newBox.size > box.x && box.x + box.size > newBox.x;
      const isOverlappingY = newBox.y + newBox.size > box.y && box.y + box.size > newBox.y;

      if (isOverlappingX && isOverlappingY) {
        return true;
      }
    }
    return false;
  }
  
  toggleBorder(box: Box) {
    this.selectedBox = this.selectedBox === box ? null : box;
  }
}