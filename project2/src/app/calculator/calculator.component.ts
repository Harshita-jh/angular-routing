import { Component } from '@angular/core';
import { CalculatorAssignmentService } from '../services/calculator-assignment.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result:any;
  
  constructor(private calc:CalculatorAssignmentService){}
  addOperation(firstNumber:any, secondNumber:any){

    this.result = this.calc.addOperation(firstNumber, secondNumber);

  }

  subOperation(firstNumber:any, secondNumber:any){

    this.result = this.calc.subOperation(firstNumber, secondNumber);

  }

  mulOperation(firstNumber:any, secondNumber:any){

    this.result = this.calc.mulOperation(firstNumber, secondNumber);

  }

  divOperation(firstNumber:any, secondNumber:any){

    this.result = this.calc.divOperation(firstNumber, secondNumber);

  }
}


