import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  location: string = 'tenkasi';
  weatherData: any;
  showError: boolean = false;
  
  filteredLocations!: any[];

  constructor(private weatherService: WeatherService) {}
  

  ngOnInit() {
    this.search();
  }

  getWeather() {
    if (this.location.trim() === '') {
      this.showError = true;
      return;
    }
    this.showError = false;
    this.weatherService.getWeather(this.location)
      .subscribe(data => {
         
        this.weatherData = data;
        this.getTemperature(this.weatherData.results[0].latitude, this.weatherData.results[0].longitude);
      }
    );
  }

  getTemperature(latitude: number, longitude: number) {
    this.weatherService.getTemperature(latitude, longitude)
      .subscribe(data => {
        this.weatherData.weather = data;
      });
  }
  search() {
    this.getWeather();
  }
  getWeatherDescription(weatherCode: number): string {
    switch (weatherCode) {
      case 0:
        return 'Clear sky';
      case 1:
        return 'Mainlyclear';
      case 2:
        return 'partly cloudy';
      case 3:
        return 'overcast';
      case 45:
        return 'Fog';
      case 48:
        return 'depositing rime fog';
      case 51:
        return 'Drizzle: Light';
      case 53:
        return  'moderate';
      case 55:
        return 'dense intensity';
      case 56:
        return 'Freezing Drizzle: Light';
      case 57:
        return 'dense intensity';
      case 61:
        return 'Rain: Slight';
      case 63:
        return 'moderate';
      case 65:
        return 'heavy intensity';
      case 66:
        return 'Freezing Rain: Light';
      case 67:
        return 'heavy intensity';
      case 71:
        return 'Snow fall: Slight';
      case 73:
        return 'moderate';
      case 75:
        return 'heavy intensity';
      case 77:
        return 'Snow grains';
      case 80:
        return 'Rain showers: Slight';
      case 81:
        return 'moderate';
      case 82:
        return  'violent';
      case 85:
        return 'Snow showers slight';
      case 86:
        return 'heavy';
      case 95:
        return 'Thunderstorm: Slight or moderate';
      case 96:
        return 'Thunderstorm with slight';
      case 99:
        return 'heavy hail';
      default:
        return 'Unknown';
    }
  }

  getWeatherImage(): string {
    if (this.weatherData && this.weatherData.weather) {
      const weatherCode = this.weatherData.weather.current_weather.weathercode;
      const temperature = this.weatherData.weather.current_weather.temperature;
      
      if (weatherCode === 0) {
      
        return '../assets/pic2.jpg';
      } else if (weatherCode === 1) {
      
        return '../assets/pic3.jpg';
      } else if (temperature < 10) {
        
        return '../assets/pic4.jpg';
      } else {
        
        return '../assets/pic5.jpg';
      }
    }
    return '../assets/pic5.jpg'; 
  }

 getWeatherIcon(weatherCode: number): string {
  const iconBaseUrl = 'http://openweathermap.org/img/wn/';
  
  switch (weatherCode) {
    
    case 0:
      return iconBaseUrl + '01d@2x.png';
    case 1:
      return iconBaseUrl + '01d@2x.png';
    case 2:
      return iconBaseUrl + '02d@2x.png';
    case 3:
      return iconBaseUrl + '02d@2x.png';
    case 51:
      return iconBaseUrl + '10d@2x.png'; 
    case 56:
      return iconBaseUrl + '10d@2x.png'; 
    case 61:
      return iconBaseUrl + '10d@2x.png';
    case 95:
      return iconBaseUrl + '11d@2x.png';
    case 96:
      return iconBaseUrl + '11d@2x.png';
    default:
      return iconBaseUrl + '01d@2x.png';
  }
}
clearLocation() {
  this.location = '';
}
}

