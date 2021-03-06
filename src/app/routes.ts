/* Copyright (C) 2021/March Badde Liyanage Don Dilanga ( github@dilanga.com ) - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Simple non code license (SNCL)
 * https://tldrlegal.com/license/simple-non-code-license-(sncl)
 * You should have received a copy of the Simple non code license (SNCL) with
 * this file. If not, please write to: github@dilanga.com ,
 * or visit : https://github.com/donqq/weather-App
 */

import { Routes } from '@angular/router';
import { CityViewComponent } from './city-view/city-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const route: Routes = [
  {path : 'dashboard', component: DashboardComponent},
  {path: 'cityview', component: CityViewComponent},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];
