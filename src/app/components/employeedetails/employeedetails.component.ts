import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion'
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  public myAngularxQrCode: string = null;
  constructor() { }

  ngOnInit(): void {
    this.myAngularxQrCode = 'ETV 9PM News';
  }

}
