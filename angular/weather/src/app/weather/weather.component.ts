import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
 /*  name!: string;
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.name)
    .subscribe(data=>{
      this.weatherData=data;
      console.log(data);
    }); 
  } */

  constructor(private http: HttpClient) { }

  startDate: string = ''; // Add this property and initialize it with an empty string
  endDate: string = '';   // Add this property and initialize it with an empty string

  // ... other methods ...
  weatherData: any; // Replace 'any' with the actual type of your weather data
  weeklyTemperatureData: number[] = [];

  fetchWeatherData() {
    // Validate if start and end dates are entered
    if (!this.startDate || !this.endDate) {
      return;
    }

    const latitude = 'your_latitude';
    const longitude = 'your_longitude';

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&start_date=${this.startDate}&end_date=${this.endDate}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,&daily=uv_index_max&timezone=GMT`;

    this.http.get(url).subscribe((response: any) => {
      this.weatherData = response;
      this.weeklyTemperatureData = response.hourly.temperature_2m;
    });
  }
  
}
