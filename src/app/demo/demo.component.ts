import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  a:number=10;
  b:string="kavish";
  ans:number=0;
  add(x,y){
    this.ans=parseInt(x)+parseInt(y)

  }
  sub(x,y){
    this.ans=parseInt(x)-parseInt(y)

  }
  mul(x,y){
    this.ans=parseInt(x)*parseInt(y)

  }
  div(x,y){
    if(y=="")
    {
      alert("Plz enter second number")
    }
    else
    {
      this.ans=parseInt(x)/parseInt(y)
    }
    

  }

}
