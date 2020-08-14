import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'studentlist' },
  { path: 'studentlist', component: StudentlistComponent },
  { path: 'studentdetails', component: StudentdetailsComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'employeedetails', component: EmployeedetailsComponent },
  { path: 'groceries', component: GroceriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
