import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MydialogmodalComponent } from './components/mydialogmodal/mydialogmodal.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { AdminModule } from './admin/admin.module';
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
    StudentlistComponent,
    MydialogmodalComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
