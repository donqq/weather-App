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
