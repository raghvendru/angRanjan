import { Injectable } from '@angular/core';
//import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  // getPosts(){
  //   return this.httpClient.get(this.url);
  // }
  getListOfData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}employees`); // Replace 'employees' with your API endpoint
  }

  addData(newData: any): Observable<any> {
    return this.http.post<any>(`${this.url}employees`, newData); // Replace 'endpoint' with your API endpoint
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(`${this.url}employees/${employeeId}`);
  }

}
