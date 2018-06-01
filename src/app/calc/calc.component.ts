import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
no1;
no2;
y:string="";
f:number;
ans:number;
  constructor() { }

  ngOnInit() {
  }
  onclick0(){
    this.y+="0"
    
  }

  onclick1(){
    this.y+="1"
  }

  onclick2(){
    this.y+="2"
  }

  onclick3(){
    this.y+="3"
  }

  onclick4(){
    this.y+="4"
  }

  onclick5(){
    this.y+="5"
  }

  
  onclick6(){
    this.y+="6"
  }

  onclick7(){
    this.y+="7"
  }

  onclick8(){
    this.y+="8"
  }

  onclick9(){
    this.y+="9"
  }
  onclickplus(){
    this.no1=parseInt(this.y);
    this.f=1;
    this.y="";

  }

  onclickminus(){
    this.no1=parseInt(this.y);
    this.f=2;
    this.y="";

  }

  onclickpmul(){
    this.no1=parseInt(this.y);
    this.f=3;
    this.y="";

  }

  onclickdiv(){
    this.no1=parseInt(this.y);
    this.f=4;
    this.y="";

  }
  onclickce(){
    
    this.y="";

  }
  
  onclickeq(){
    this.no2=parseInt(this.y)
    if(this.f==1)
     {
      this.ans=this.no1+this.no2;

    }
    if(this.f==2)
    {
     this.ans=this.no1-this.no2;
   }
   if(this.f==3)
   {
    this.ans=this.no1*this.no2;
  }
  if(this.f==4)
  {
   this.ans=this.no1/this.no2;
 }
this.y=this.ans+"";
  }
}
