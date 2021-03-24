/* Copyright (C) 2021/March Badde Liyanage Don Dilanga ( github@dilanga.com ) - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Simple non code license (SNCL)
 * https://tldrlegal.com/license/simple-non-code-license-(sncl)
 * You should have received a copy of the Simple non code license (SNCL) with
 * this file. If not, please write to: github@dilanga.com ,
 * or visit : https://github.com/donqq/weather-App
 */

import { Component, Input, OnInit } from '@angular/core';
import { cityColours } from '../data';
import { WeatherDetails, CityColour, WeatherIcon } from '../weatherInterface';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input()
  weatherDetails: WeatherDetails =  {} as WeatherDetails;

  constructor() { }

  ngOnInit(): void {
  }

}

