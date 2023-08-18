import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
  @Input() tasks: any[]=[]; 
  searchText:string='';
  constructor() {}

  removeTask(index:number) {
    this.tasks.splice(index,1)
    localStorage.setItem('my_tasks',JSON.stringify(this.tasks))
  }

  handleDeleteKey(event: KeyboardEvent) {
    if (event.key === 'Delete' && this.tasks) {
      this.removeTask(0); 
    }
  }
}
