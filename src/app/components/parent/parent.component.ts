import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public CData: number;
  public PData: number;
  constructor() { }
  parseData() {
    this.CData = this.PData;
  }

  ngOnInit() {
  }

}
