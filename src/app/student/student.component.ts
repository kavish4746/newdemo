import { Component, OnInit } from '@angular/core';
import {stud } from './stu';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
stuarr:stud[]=[
  new stud(1,'Kavish','male','A','pass'),
  new stud(2,'Harshil','male','A','pass'),
  new stud(3,'Shruti','female','F','fail')
]
id:number;
name:string;
gender:string;
grd:string;
drp:string;
pfarr:string[]=[
  'pass',
  'fail'
]
ondelete(i:number){
    this.stuarr.splice(i,1)
}
onupdate(item:stud){
  if(item.result=='pass')
  {
    item.result='fail'
    item.grade='F'
  }
  else
  {
    item.result='pass'
    item.grade='B'
  }
}
onAdd(){
  this.stuarr.push(new stud(this.id,this.name,this.gender,this.grd,this.drp))
}
  constructor() { }

  ngOnInit() {
  }

}
