import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee.model';
import { Employees } from './employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'https://localhost:44378/api';

  constructor(private httpclient: HttpClient) { }
  getemployees(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(this.url + '/AddEmployee');
  }
  updateEmployeedetails(employeedetails: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpclient.post<Employee>(this.url + '/AddEmployee/id',employeedetails, httpOptions);
  }
  deleteEmployee(Id: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpclient.delete<number>(this.url + '/AddEmployee/' + Id, httpOptions);
  }
  putEmployeedetails(Id: number,employeedetails:Employees): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpclient.put<number>(this.url + '/AddEmployee/' + employeedetails , Id, httpOptions);
  }
}
