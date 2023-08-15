import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorAssignmentService {

  addOperation(firstNumber:any, secondNumber:any){

    return  Number(firstNumber)+ Number(secondNumber);
  }
    subOperation(firstNumber:any, secondNumber:any){

    return Number(firstNumber)- Number(secondNumber);
  
  }
  
  mulOperation(firstNumber:any, secondNumber:any){
  
    return  Number(firstNumber)* Number(secondNumber);
  
  }
  divOperation(firstNumber:any, secondNumber:any){
  
    return  Number(firstNumber)/ Number(secondNumber);
  }
}
