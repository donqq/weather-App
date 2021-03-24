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

