import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

const routes: Routes = [
  {
    path: '', component: ListEmployeeComponent
  },
  {
    path: 'list-employee', component: ListEmployeeComponent
  },
  {
    path: 'add-employee', component: AddEmployeeComponent
  },
  {
    path: 'edit-employee/:id', component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
