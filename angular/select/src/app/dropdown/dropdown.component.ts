import { Component, Input,Output, EventEmitter,HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() options:string[]=[];
  @Output() optionsSelected:EventEmitter<string>=new EventEmitter<string>();

  isOpen:boolean = false;
  inputOption:string = '';
  
  toggleList():void {
    this.isOpen=!this.isOpen;
  }

  selectOption(option:string):void {
    this.inputOption = option;
    this.optionsSelected.emit(option);
    this.isOpen = false;
  }
  @HostListener('document:click',['$event'])
  onclick(event:MouseEvent):void {
    const targetElement = event.target as HTMLElement;
    if(!targetElement.closest('.child'))  {
    this.isOpen = false;

    }
  }
}
