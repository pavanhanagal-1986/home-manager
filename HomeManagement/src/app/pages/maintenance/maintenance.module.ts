import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaintenanceListComponent } from './maintenance-list.component';
import { MaintenanceDetailComponent } from './maintenance-detail.component';
import { MaintenanceEditComponent } from './maintenance-edit.component';

const routes = [
  { path: '', component: MaintenanceListComponent },
  { path: 'new', component: MaintenanceEditComponent },
  { path: ':id', component: MaintenanceDetailComponent },
  { path: ':id/edit', component: MaintenanceEditComponent }
];

@NgModule({
  declarations: [MaintenanceListComponent, MaintenanceDetailComponent, MaintenanceEditComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class MaintenanceModule {}
