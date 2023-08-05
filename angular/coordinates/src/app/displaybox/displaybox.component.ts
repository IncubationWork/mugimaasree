import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Box } from '../box.service';

@Component({
  selector: 'app-display-box',
  templateUrl: './displaybox.component.html',
  styleUrls: ['./displaybox.component.css']
})

export class DisplayboxComponent {
  @Input() box!: Box;
  @Input() selectedBox: Box | null = null;
  @Output() delete = new EventEmitter<Box>();
  @Output()click = new EventEmitter<Box>();

  onDelete() {
    this.delete.emit(this.box);
  }

  toggleBorder(box: Box) {
    this.click.emit(this.box);
    
    if (this.selectedBox === box) {
      this.selectedBox = null;
    } else {
      this.selectedBox = box;
    }
  }
}