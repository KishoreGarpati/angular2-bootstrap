import { Component } from '@angular/core';
import { Owner } from './owner';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TasksService]
})
export class AppComponent {

  constructor(private tasksService: TasksService) {
  }

  owner = new Owner({
    name: 'Baerree',
    age: 33,
    country: 'GER',
    jobtitle: 'Software Developer',
    company: 'ABC DEV'
  });

  get tasks(){
    return this.tasksService.getTasklist();
  }

  getRdmImage(id:number): String {
      return "assets/img/time" + id + ".jpg";
  }
}