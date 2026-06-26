import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'appliances', loadChildren: () => import('./pages/appliances/appliances.module').then(m => m.AppliancesModule) },
  { path: 'vehicles', loadChildren: () => import('./pages/vehicles/vehicles.module').then(m => m.VehiclesModule) },
  { path: 'financials', loadChildren: () => import('./pages/financials/financials.module').then(m => m.FinancialsModule) },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
