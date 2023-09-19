import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subs:string[]=["Tamil","English","Maths","science","social"];
  isCheckedSubs:{ [ key : string ]:boolean} ={};
  selectedSubs : string[] = [];
  
   toggleCheck(sub:string) {
    this.isCheckedSubs[sub]= !this.isCheckedSubs[sub];
    if (this.isCheckedSubs[sub]) {
      this.selectedSubs.push(sub);
    } else {
      const index = this.selectedSubs.indexOf(sub);
      if (index !== -1) {
        this.selectedSubs.splice(index,1);
      }
    }
  }
}


