import { Component,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdown';
  selectedSub: string='';
  show = false;

  toggleList() {
    this.show = !this.show;
  }

  selectSub(subject:string) {
    this.selectedSub = subject;
    this.show =false;
  }
  @HostListener('document:click',['$event'])
  onclick(event:MouseEvent):void {
    const targetElement = event.target as HTMLElement;
    if(!targetElement.closest('.input'))  {
    this.show=false;
    }
  }
}
