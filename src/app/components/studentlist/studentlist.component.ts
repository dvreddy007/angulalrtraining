import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service'

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  public students = [];
  constructor(private _studentService: StudentService) { }
  ngOnInit() {
    this._studentService.getStudent().subscribe(response => this.students = response)
  }
}
