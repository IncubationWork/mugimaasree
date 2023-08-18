import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'My Task List';
  taskList:string[]=[];

  ngOnInit(): void {
    const taskList=localStorage.getItem('my_tasks');
    if(taskList !== null){
      this.taskList=JSON.parse(taskList);
    }
  }
}
