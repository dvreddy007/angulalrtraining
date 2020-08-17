import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog-modal',
  templateUrl: './mydialogmodal.component.html',
  styleUrls: ['./mydialogmodal.component.css']
})
export class MydialogmodalComponent implements OnInit {


  fromPage: string;
  fromDialog: string;

  constructor(
    public dialogRef: MatDialogRef<MydialogmodalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fromPage = data.pageValue;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }

}
