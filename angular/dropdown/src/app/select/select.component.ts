import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() selectedSub: string = '';
  @Output() subjectSelected = new EventEmitter<string>();
  
  listSubject:string[] = ['Tamil','English','Maths','Science','Social'];
  
  onSubClick(subject:string) {
    this.subjectSelected.emit(subject);
  }
}


