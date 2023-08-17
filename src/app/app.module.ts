import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import {HttpClientModule} from "@angular/common/http";
import {EmployeeService} from "./services/employee.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  // schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
