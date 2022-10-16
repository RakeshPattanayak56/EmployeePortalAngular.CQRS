import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddEmployee } from './add-employee.model';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {
  url = 'https://localhost:44378/api';
  constructor(private http: HttpClient) { }
  getAllEmployeedetails(): Observable<AddEmployee[]> {
    debugger
    return this.http.get<AddEmployee[]>(this.url + '/AddEmployee/getallemployeedetail');
  }
  updateEmployeedetails(employeedetails: AddEmployee): Observable<AddEmployee> {
    debugger
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<AddEmployee>(this.url + '/AddEmployee',employeedetails, httpOptions);
  }
}
