import { Component } from '@angular/core';
import { BoxService, Box } from '../box.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})

export class OutputComponent {
  
  constructor(public boxService: BoxService) {}

  onDeleteBox(box: Box) {
    this.boxService.deleteBox(box);
  }
}
