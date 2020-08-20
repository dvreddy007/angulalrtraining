import { Component, OnInit } from '@angular/core';
import { MydialogmodalComponent } from '../mydialogmodal/mydialogmodal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  dialogValue: string;
  sendValue: string;
  hide = true;
  myUserForm: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(MydialogmodalComponent, {
      width: '250px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { pageValue: this.sendValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
    });
  }

  onSubmitUsrForm() {

  }
  ngOnInit() {
    this.myUserForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      amount: ['']
    })
  }

}
