import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FinancialsListComponent } from './financials-list.component';
import { FinancialsDetailComponent } from './financials-detail.component';
import { FinancialsEditComponent } from './financials-edit.component';

const routes = [
  { path: '', component: FinancialsListComponent },
  { path: 'new', component: FinancialsEditComponent },
  { path: ':id', component: FinancialsDetailComponent },
  { path: ':id/edit', component: FinancialsEditComponent }
];

@NgModule({
  declarations: [FinancialsListComponent, FinancialsDetailComponent, FinancialsEditComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class FinancialsModule {}
