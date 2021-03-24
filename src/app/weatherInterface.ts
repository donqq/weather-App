/* Copyright (C) 2021/March Badde Liyanage Don Dilanga ( github@dilanga.com ) - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Simple non code license (SNCL)
 * https://tldrlegal.com/license/simple-non-code-license-(sncl)
 * You should have received a copy of the Simple non code license (SNCL) with
 * this file. If not, please write to: github@dilanga.com ,
 * or visit : https://github.com/donqq/weather-App
 */

export interface WeatherDetails{
  country: string;
  sunrise: Date;
  sunset: Date;
  weather?: WeatherIcon;
  temp: string;
  pressure: string;
  humidity: string;
  temp_min: string;
  temp_max: string;
  visibility: string;
  wind_speed: string;
  wind_deg: string;
  clouds: string;
  date: Date;
  city: string;
  backgroundColour?: string;
}

export interface CityColour{
  city: string;
  colour: string;
}

export interface WeatherIcon{
  weatherName: string;
  weatherIcon: string;
}
