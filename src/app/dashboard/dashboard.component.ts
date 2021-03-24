/* Copyright (C) 2021/March Badde Liyanage Don Dilanga ( github@dilanga.com ) - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Simple non code license (SNCL)
 * https://tldrlegal.com/license/simple-non-code-license-(sncl)
 * You should have received a copy of the Simple non code license (SNCL) with
 * this file. If not, please write to: github@dilanga.com ,
 * or visit : https://github.com/donqq/weather-App
 */

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as jsonCities from '../resources/cities.json';
import { WeatherDetails } from '../weatherInterface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private readonly cityCode: string[];
  public weatherDetails: WeatherDetails[]  =  [];

  constructor(private api: ApiService) {
    this.cityCode = [];
    jsonCities.List.forEach(value => {
      this.cityCode.push(value.CityCode);
    });
  }

  ngOnInit(): void {
    this.cityCode.forEach(cityCode => {
      // tslint:disable-next-line: deprecation
      this.api.fetchDate(cityCode).subscribe({
        next: (value) => {
          this.weatherDetails.push(value);
        }
      });
    });
  }





}
