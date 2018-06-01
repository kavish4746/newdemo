import { Component, OnInit } from '@angular/core';
import { Task } from './tasd';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  tasks:Task[]=[
    new Task(1,'Nothing','pending'),
    new Task(2,'Backup','done'),
    new Task(3,'Email','Pending')
  ]
  starr:string[]=[
    'done',
    'pending'
  ]
  constructor() { }

  ngOnInit() {
  }
  ondel(i:number){
    this.tasks.splice(i,1)

  }
  onup(item:Task){
    if(item.status=='done')
    {
      item.status='pending'
    }
    else
    {
      item.status='done'
    }
  }
  onAdd(x,y,z){
    this.tasks.push(new Task(x,y,z))
  }
}
