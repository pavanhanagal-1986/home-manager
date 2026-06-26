import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VehiclesListComponent } from './vehicles-list.component';
import { VehiclesDetailComponent } from './vehicles-detail.component';
import { VehiclesEditComponent } from './vehicles-edit.component';

const routes = [
  { path: '', component: VehiclesListComponent },
  { path: 'new', component: VehiclesEditComponent },
  { path: ':id', component: VehiclesDetailComponent },
  { path: ':id/edit', component: VehiclesEditComponent }
];

@NgModule({
  declarations: [VehiclesListComponent, VehiclesDetailComponent, VehiclesEditComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class VehiclesModule {}
