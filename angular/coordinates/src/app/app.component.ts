import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coordinates';
  boxBlur = false;
  showCreateBoxComponent = false;

  constructor(private location: Location) {}

  onCoordinatesSelected(coordinates: { x: number; y: number }) {
    const x = coordinates.x;
    const y = coordinates.y;
    this.location.go(`/input/x=${x}&y=${y}`);
  }

  toggleCreateBox() {
    this.showCreateBoxComponent = !this.showCreateBoxComponent;
    this.boxBlur = this.showCreateBoxComponent;
  }
}
