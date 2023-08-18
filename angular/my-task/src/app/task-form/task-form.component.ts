import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent {
  @Input() taskList!:any[];
  newTask: string='';

  addTodo() {
    if (this.newTask.trim() !== '') {
      this.taskList.push(this.newTask);
      localStorage.setItem('my_tasks', JSON.stringify(this.taskList));
      this.newTask = ''; 
    }
  }

  handleEnterKey(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.taskList) {
      this.addTodo();
    }
  }
}
