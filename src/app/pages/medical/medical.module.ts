import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MedicalListComponent } from './medical-list.component';
import { MedicalDetailComponent } from './medical-detail.component';
import { MedicalEditComponent } from './medical-edit.component';

const routes = [
  { path: '', component: MedicalListComponent },
  { path: 'new', component: MedicalEditComponent },
  { path: ':id', component: MedicalDetailComponent },
  { path: ':id/edit', component: MedicalEditComponent }
];

@NgModule({
  declarations: [MedicalListComponent, MedicalDetailComponent, MedicalEditComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class MedicalModule {}
