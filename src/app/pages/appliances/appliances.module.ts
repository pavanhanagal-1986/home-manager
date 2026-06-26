import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppliancesListComponent } from './appliances-list.component';
import { AppliancesDetailComponent } from './appliances-detail.component';
import { AppliancesEditComponent } from './appliances-edit.component';

const routes = [
  { path: '', component: AppliancesListComponent },
  { path: 'new', component: AppliancesEditComponent },
  { path: ':id', component: AppliancesDetailComponent },
  { path: ':id/edit', component: AppliancesEditComponent }
];

@NgModule({
  declarations: [AppliancesListComponent, AppliancesDetailComponent, AppliancesEditComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class AppliancesModule {}
