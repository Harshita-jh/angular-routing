import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  amount:number = 100

 parentFunction(data:any){
    this.amount = data
  }

}