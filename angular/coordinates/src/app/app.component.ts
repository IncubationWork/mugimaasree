import { Component } from '@angular/core';
import { Box, BoxService } from './box.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'coordinates';
  boxBlur = false;
  showCreateBoxComponent = false;
  selectedBox: Box | null = null;
  
  constructor(public boxService: BoxService) {}

  onCoordinatesSelected(coordinates: { x: number; y: number }) {
    const x = coordinates.x;
    const y = coordinates.y;
  }

  toggleCreateBox() {
    this.showCreateBoxComponent = !this.showCreateBoxComponent;
    this.boxBlur = this.showCreateBoxComponent;
  }
}
