import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  public students = []
  constructor(private _studentService: StudentService) { }

  ngOnInit() {
    this.students = this._studentService.getStudent();
    console.log(JSON.stringify(this.students));
  }
  title = "Angular training student details";

}
