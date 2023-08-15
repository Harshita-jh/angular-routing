import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeesearchfilter'
})
export class EmployeesearchfilterPipe implements PipeTransform {

  transform(Employees:any, value:any):any {

    value = value.toLowerCase();
    
    return Employees.filter(function(item:any){
    
    return (item.empName).toLowerCase().startsWith(value);
    
    });
    
    }

}
