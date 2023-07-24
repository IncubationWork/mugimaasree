import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'select';
  listOptions:string[] = ['Tamil','English','Maths','Science','Social']
  inputOption : string = '';

  onOptionSelected(option:string) {
    this.inputOption = option;
  }
}

