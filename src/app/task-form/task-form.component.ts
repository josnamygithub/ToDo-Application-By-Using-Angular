import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../_interfaces/todo';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements  OnInit {
  @Input() taskList :any;
  newTask: Todo = {
    _id: undefined,
    name: '',
    description: '',
    is_completed: false,
  };
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
  if (!this.newTask.name.trim()) {
    return;
  }
    this.newTask._id = this.taskList.length ? this.taskList[0]._id + 1 : 1;
    this.taskList.unshift(this.newTask);
    localStorage.setItem('my_tasks', JSON.stringify(this.taskList))
    this.newTask = {
      _id: undefined,
      name: '',
      description: '',
      is_completed: false
    };
  }

}