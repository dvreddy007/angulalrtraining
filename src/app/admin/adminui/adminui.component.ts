import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminui',
  templateUrl: './adminui.component.html',
  styleUrls: ['./adminui.component.css']
})
export class AdminuiComponent implements OnInit {
  public changeColor;
  public marks = 25;
  constructor() { }

  ngOnInit(): void {
    if (this.marks < 35) {
      this.changeColor = 'warn';
    } else if (this.marks < 60) {
      this.changeColor = 'accent';
    } else {
      this.changeColor = 'primary';
    }
  }
  ngOnChanges() {

  }
  changeMarks() {
    this.marks = this.marks
  }

}
