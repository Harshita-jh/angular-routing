import { Component } from '@angular/core';
import { EmployeedetailsService } from '../services/employeedetails.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent {
  searchText:string= "";
  
  empList: any = [];
  currentEmployee: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    code: '',
    contactNumber: '',
    address: ''
  }
 
  constructor(private employeedetailsService:EmployeedetailsService){
    this.employeedetailsService.getEmployeesInfo().subscribe((resp: any) => this.empList=resp)
  }
  
    
  ngOnInit() {
    this.getEmployeesInfo();
  }
 

  getEmployeesInfo() {
    this.employeedetailsService.getEmployeesInfo().subscribe(res => {
      this.empList = res;
      console.log(this.empList)

    })
    
  
  }
  createEmployee(currentEmployee: Employee) {
    console.log(currentEmployee)
    if (currentEmployee.id === '') {
      console.log('Create');
      this.employeedetailsService.createEmployee(currentEmployee).subscribe(
        (data) => {
          this.getEmployeesInfo();
        });
    } else {
      console.log('Update');
      this.employeedetailsService.updateEmployee(currentEmployee).subscribe(
        (data) => {
          this.getEmployeesInfo(); //refresh teh data
        });
    }
  }

  editEmployee(employee: Employee) {
    this.currentEmployee = Object.assign({}, employee);
    //this.employeeService.currentEmployee = {...employee};
  }

  deleteEmployee(id: number) {
    this.employeedetailsService.deleteEmployee(id).subscribe(
      (data) => {
        this.getEmployeesInfo();
      });
  }

  clearEmployee(currentEmployee: Employee) {
    this.currentEmployee = {
      id: '',
      firstName: '',
      lastName: '',
      code: '',
      contactNumber: '',
      address: ''
    }
  }

}

