import { Component, OnInit } from '@angular/core';
import {prod } from './pro';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productarr:prod[]=[
    new prod(1,'mobile',12000,'img1','samsung',5),
    new prod(2,'mobile',18000,'img2','MI',30),
    new prod(3,'Television',62000,'img3','sony',10),
  ]
  stc:number;
  id:number;
  name:string;
  price:number;
  img1:string='../assets/a2.jpg';
  mfg1:string;
  soh1:number;
  flag:boolean=false;
  drparr:number[]=[];
  ondelete(i:number){
      this.productarr.splice(i,1)
  }
  onmin(item:prod){
    if(item.stock<=5)
    {
      this.flag=true
    }
    else
    {
      item.stock-=1;
    }
    

  }

  onuplus(item:prod){
    item.stock+=1;

  }
  onAdd(){
    this.productarr.push(new prod(this.id,this.name,this.price,this.img1,this.mfg1,this.soh1));
  }
  
  constructor() { }

  ngOnInit() {
    for(let i=1;i<50;i++)
    {
      this.drparr.push(i);
    }
  }

}
