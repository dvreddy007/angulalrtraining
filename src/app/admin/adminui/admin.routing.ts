import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminuiComponent } from '../adminui/adminui.component';
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'adminui' },
    { path: 'adminui', component: AdminuiComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
