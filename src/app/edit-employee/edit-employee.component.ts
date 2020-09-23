import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  @ViewChild("f") form: any;
  id: any;
  emp;
  constructor(private route: ActivatedRoute, private service: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let emps = this.service.getEmployees();
    this.emp=emps.find(p=> p.id == this.id);
    console.log(this.emp)
  }

  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
    this.service.updateEmployee(this.emp,this.form.value);
    this.router.navigate(['list-employee']);
    }
  }

}
