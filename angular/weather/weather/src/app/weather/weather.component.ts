import { Component,Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  forecastDates:Date[]=[];
  startDate:string='';
  endDate:string='';
  latitude:number=0;
  longitude:number=0;

  @Input() weeklyTemperatureData:number[]=[];
  @Input() weatherData:any;

  currentDate:Date = new Date();
  currentIndex:number=0;
  days:any[]=[];

  constructor(private weatherService:WeatherService){
    this.calculateForecastDates();
  }

  calculateForecastDates(){
    const currentDate = new Date();

    for (let i = 0; i <= 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      this.forecastDates.push(nextDate);
    }
  }
  
  getCurrentWeather() {
    const startDate = new Date(this.startDate);
    //console.log("modified date" + startDate)
    const endDate = new Date(this.endDate);
    const daysDifference = Math.floor((endDate.getTime()-startDate.getTime())/(1000*60*60*24));
    //console.log("daysDiffer" + daysDifference);
    if(daysDifference>=0 && daysDifference<=6){
      this.weatherService.getTemperature(this.latitude,this.longitude,this.startDate,this.endDate).subscribe(data=>{
        this.weatherData.weather=data;
        this.boxData();
      });
    }else{
      this.showAlert();
    }
  }

  boxData(){
    this.days=[];

    const startDate = new Date(this.startDate);
    const endDate =new Date(this.endDate);
    const currentDate = new Date(startDate);
    //console.log("current Date" + currentDate);

    while(currentDate<=endDate) {
      const currentDayData = this.getTempratureDataForDay(currentDate);
      // console.log("current Day Daye" + currentDayData);
      this.days.push(currentDayData);
      currentDate.setDate(currentDate.getDate()+1);
    }
  }

  getTempratureDataForDay(date:Date):any{
    const times = Math.floor(date.getTime()/1000);
    const index = this.weatherData.weather.hourly.time.indexOf(times);
    //console.log("time" + times);
    //console.log("index" + index);

    if(index!==-1) {
      return {
        date: date.toDateString(),
        temperature:this.weatherData.weather.hourly.temperature_2m[index],
        humidity:this.weatherData.weather.hourly.relativehumidity_2m[index],
      };
    } else {
      return {
        date: date.toDateString(),
        temperature:null,
        humidity:null
      }
    }
  }

  showAlert(){
    alert("Please fill a validate date for 7 days");
  }
}
