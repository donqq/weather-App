import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { WeatherDetails } from './weatherInterface';
import { environment } from '../environments/environment';
import { environment as Gitenvironment } from '../environments/githubenv';
import { cityColours, weatherIcon } from './data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //  Immutable Object (once assigned it can't be modified again except in constructor)
  private readonly apiKey: string;
  private readonly url: string;

  constructor(private httpClient: HttpClient) {

    if (Gitenvironment.apiKey) {
      this.apiKey = Gitenvironment.apiKey;
    }

    this.apiKey = environment.apiKey;
    this.url = environment.apiURL;
  }

  public fetchDate(cityCode: string): Observable<WeatherDetails> {
    return this.httpClient.get(this.url.replace('CITY_CODE', cityCode).replace('API_KEY', this.apiKey)).pipe(
      take(1),
      map((cityRecord: any) => { // Convert { ALL } => { WHAT I REQUIRED }
        return {
          country: cityRecord.sys.country,
          sunrise: new Date(cityRecord.sys.sunrise * 1000),
          sunset: new Date(cityRecord.sys.sunset * 1000),
          // tslint:disable-next-line: max-line-length
          weather: weatherIcon.find(description => description.weatherName === cityRecord.weather[cityRecord.weather.length - 1].description),
          temp: (Number(cityRecord.main.temp ) - 273.15).toFixed(0) + '°c' ,
          pressure: cityRecord.main.pressure,
          humidity: cityRecord.main.humidity,
          temp_min: 'Temp Min: ' + (Number(cityRecord.main.temp_min) - 273.15).toFixed(0) + '°c' ,
          temp_max: 'Temp Max: ' + (Number(cityRecord.main.temp_max) - 273.15).toFixed(0) + '°c' ,
          visibility: (Number(cityRecord.visibility) / 1000).toFixed(1), // visibility is in metre. convert it to km.
          wind_speed: cityRecord.wind.speed,
          wind_deg: cityRecord.wind.deg,
          clouds: cityRecord.clouds.all,
          date: new Date(cityRecord.dt * 1000),
          city: cityRecord.name,
          backgroundColour: cityColours.find(cityDetails => cityDetails.city === cityRecord.name)?.colour
        };
      })
    );
  }
}
