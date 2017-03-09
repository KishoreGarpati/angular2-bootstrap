import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';

@Injectable()
export class TasksService {

  tasklist: Task[];
  currentID: number;

  constructor() {
    this.tasklist = TASKS;
    this.currentID = this.tasklist.length;
  }

  addTask(newTask: Task){
    let newID =  ++this.currentID;
    newTask.id = newID;
    this.tasklist.push(newTask);
  }

  deleteTask(id: number) {
    this.tasklist = this.tasklist
      .filter(task => task.id !== id);
  }

  getTasklist(): Task[] {
    return this.tasklist;
  }

}
