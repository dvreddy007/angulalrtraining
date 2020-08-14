import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { MaterialModule } from './material.module';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { StudentService } from './services/student.service'

@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    StudentdetailsComponent,
    ProductdetailsComponent,
    EmployeedetailsComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    GroceriesComponent,
    StudentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
