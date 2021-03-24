/* Copyright (C) 2021/March Badde Liyanage Don Dilanga ( github@dilanga.com ) - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Simple non code license (SNCL)
 * https://tldrlegal.com/license/simple-non-code-license-(sncl)
 * You should have received a copy of the Simple non code license (SNCL) with
 * this file. If not, please write to: github@dilanga.com ,
 * or visit : https://github.com/donqq/weather-App
 */

import { CityColour, WeatherIcon } from './weatherInterface';

export const cityColours: CityColour[] = [
  {city: 'Colombo', colour: 'rgb(56,142,231)'}, // Hex 388ee7, RGB 56 142 231
  {city: 'Tokyo', colour: 'rgb(98,73,204)'}, // Hex 6249cc, RGB 98 73 204
  {city: 'Liverpool', colour: 'rgb(64,182,129)'}, // Hex 40b681, RGB 64 182 129
  {city: 'Sydney', colour: 'rgb(222,148,78)'}, // Hex de944e, RGB 222 148 78
  {city: 'Boston', colour: 'rgb(156,58,58)'}, // Hex 9c3a3a, RGB 156 58 58
  {city: 'Oslo', colour: 'rgb(33,58,115)'}, // Hex 213a73, RGB 33 58 115
  {city: 'Shanghai', colour: 'rgb(115,139,215)'}, // Hex 738bd7, RGB 115 139 215
  {city: 'Paris', colour: 'rgb(249,104,84)'} // Hex f96854, RGB 249 104 84
];

export const weatherIcon: WeatherIcon[] = [
  {weatherName: 'broken clouds', weatherIcon: '../assets/resources/weather conditions/broken clouds.png'},
  {weatherName: 'overcast clouds', weatherIcon: '../assets/resources/weather conditions/broken clouds.png'},
  {weatherName: 'rain', weatherIcon: '../assets/resources/weather conditions/rain.png'},
  {weatherName: 'clear sky', weatherIcon: '../assets/resources/weather conditions/clear sky.png'},
  {weatherName: 'few clouds', weatherIcon: '../assets/resources/weather conditions/few clouds.png'},
  {weatherName: 'mist', weatherIcon: '../assets/resources/weather conditions/mist.png'},
  {weatherName: 'scattered clouds', weatherIcon: '../assets/resources/weather conditions/scattered clouds.png'},
  {weatherName: 'shower rain', weatherIcon: '../assets/resources/weather conditions/shower rain.png'},
  {weatherName: 'snow', weatherIcon: '../assets/resources/weather conditions/snow.png'},
  {weatherName: 'thunderstorm', weatherIcon: '../assets/resources/weather conditions/thunderstorm.png'}
];
