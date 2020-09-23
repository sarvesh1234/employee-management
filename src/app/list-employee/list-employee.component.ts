import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  employees: any;
  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.service.getEmployees();
  }

  deleteEmployee(id) {
    for(let i = 0; i<this.employees.length;i++) {
      if(this.employees[i].id == id) {
        this.employees.splice(i, 1);
      }
    }
    this.service.deleteEmployees(id);
  }

}
