import { Component } from '@angular/core';
import { employees } from './employeeMockupData'
import { IEmployee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  Employees: IEmployee[] = employees;
}
