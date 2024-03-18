import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../_interfaces/todo';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
ngOnInit(): void {
  
}

@Input() tasks: Todo[] = [];
@Output('taskRemoved') taskRemoved : EventEmitter<any> = new EventEmitter();
searchText: string = '';

removeTask(_id: number) {
  this.tasks = this.tasks.filter((element) =>  element._id != _id);
  localStorage.setItem('my_tasks', JSON.stringify(this.tasks))
  this.taskRemoved.emit()
}

markAsCompleted(_id:number,event:any){
  this.tasks.forEach((element) => {
    if(element._id == _id) {
      element.is_completed = !event
    }
  });
  
  localStorage.setItem('my_tasks', JSON.stringify(this.tasks))
}
editTask(task: Todo) {
  task.isOpened = !task.isOpened; // Toggle edit mode
}

}
