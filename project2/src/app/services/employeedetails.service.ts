import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService {

  private url:string = "assets/employees.json"
  constructor(private http: HttpClient) { }
  getEmployeesInfo(){
    return this.http.get(this.url)
  }
  allEmployee: any = [];
  // mockUrl: string = 'http://localhost:3000/Employee';

  // constructor(private http: HttpClient) { }
  // getAllEmployee() {
  //   return this.http.get(this.mockUrl)    
  // }

  deleteEmployee(id: Number): Observable<Employee> {
    return this.http.delete<Employee>(this.url + '/' + id, headerOption);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    console.log(employee)
    return this.http.post<Employee>(this.url, employee, headerOption);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url + '/' + employee.id, employee, headerOption);
  }

}
