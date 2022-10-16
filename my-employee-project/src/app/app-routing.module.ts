import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
{
  path:"welcome",component:WelcomeComponent
},
{
  path:"employee",component:EmployeeComponent
},
{path:"view-employee",component:ViewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
