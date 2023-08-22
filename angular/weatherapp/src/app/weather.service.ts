import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  getWeather(location: string) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`;
    return this.http.get(url);
  }

  getTemperature(latitude: number, longitude: number) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&start_date=2023-08-04&end_date=2023-08-18&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,&daily=uv_index_max&timezone=GMT`;
    return this.http.get(url);
  }
}

