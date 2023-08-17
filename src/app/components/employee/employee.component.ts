import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{private apiUrl = 'http://localhost:8080/api/employees'; // Replace with your API URL
  posts:any
  public empList : any;
  public fname : any;
  public lname :  any;
  public email: any;

  constructor(private service:EmployeeService) {}

  ngOnInit() {
    this.service.getListOfData()
      .subscribe(response => {
        this.posts = response;
        this.empList = response;
        console.log(this.posts);
      });
  }

  addNewData(): void {
    const newData = { firstName: this.fname, lastName: this.lname, email: this.email }; // Customize new entry data
    this.service.addData(newData).subscribe(() => {
      this.loadData(); // Refresh the data list after adding
    });
  }
  loadData(): void {
    this.service.getListOfData()
      .subscribe(response => {
        this.posts = response;
        this.empList = response;
      });
  }

  deleteEmployee(employeeId: number): void {
    this.service.deleteEmployee(employeeId).subscribe(() => {
      this.loadData(); // Refresh the data list after deletion
    });
    location.reload();
  }

  reset(){
    this.fname = '';
    this.lname = '';
    this.email = '';
  }




}
