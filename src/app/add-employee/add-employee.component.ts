import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild("f") form: any;
  emps;
  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.emps = this.service.getEmployees();

  }

  onSubmit() {
    if (this.form.value) {
    let newEmployee = {
      id:uuid(),
      firstName: this.form.value.firstName,
      position: this.form.value.position,
      Salary: this.form.value.Salary,
      age: this.form.value.age,

    }
    this.emps.push(newEmployee);
    this.service.addEmployee(newEmployee);
    this.router.navigate(['list-employee']);
    }
  }

}
