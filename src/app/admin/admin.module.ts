import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminuiComponent } from './adminui/adminui.component';
import { AdminRoutingModule } from './adminui/admin.routing'
import { MaterialModule } from '../material.module';
@NgModule({
  declarations: [AdminuiComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
