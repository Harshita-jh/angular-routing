import { Component } from '@angular/core';

@Component({
  selector: 'app-calcbootstrap',
  templateUrl: './calcbootstrap.component.html',
  styleUrls: ['./calcbootstrap.component.css']
})
export class CalcbootstrapComponent {

    num1:any;
    num2:any;
    result:any;
  
    add(){
      this.result = this.num1 + this.num2;
    }
    
    sub(){
      this.result = this.num1 - this.num2;
    }
    mul(){
      this.result = this.num1 * this.num2;
    }
    div(){
      this.result = this.num1 / this.num2;
    }
}
