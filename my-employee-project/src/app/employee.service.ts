import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'https://localhost:7097/api';

  constructor(private httpclient: HttpClient) { }
  getemployees(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(this.url + '/Employee/getemployees');
  }
  updateEmployeedetails(employeedetails: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpclient.post<Employee>(this.url + '/Employee/saveemployee',employeedetails, httpOptions);
  }
}
