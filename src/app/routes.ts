import { Routes } from '@angular/router';
import { CityViewComponent } from './city-view/city-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const route: Routes = [
  {path : 'dashboard', component: DashboardComponent},
  {path: 'cityview', component: CityViewComponent},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];
