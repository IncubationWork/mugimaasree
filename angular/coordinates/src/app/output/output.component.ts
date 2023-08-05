import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Box, BoxService } from '../box.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
}) 

export class OutputComponent {
  @Input() selectedBox: Box | null = null;
  
  constructor(public boxService: BoxService) {
    this.boxService.selectedBox$.subscribe((selectedBox: Box | null) => {
      this.selectedBox = selectedBox;
    });
  }

  onDeleteBox(box: Box) {
    this.boxService.deleteBox(box);
  }

  toggleBorder(box: Box) {
    this.boxService.updateBoxList(this.boxService.getBoxes());
    this.boxService.setSelectedBox(box); 
  }
}
