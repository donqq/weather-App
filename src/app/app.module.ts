import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityComponent } from './city/city.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { route } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { CityViewComponent } from './city-view/city-view.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CityComponent,
    NavigationBarComponent,
    CityViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
