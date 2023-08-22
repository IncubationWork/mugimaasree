import { Component ,Input} from '@angular/core';


@Component({
  selector: 'app-wether-forecast',
  templateUrl: './wether-forecast.component.html',
  styleUrls: ['./wether-forecast.component.css']
})
export class WetherForecastComponent {
  forecastDates : Date[] = [];

shiftLeft=false;
shiftRight=false;


  @Input() weeklyTemperatureData: number[] = [];
  @Input() weatherData: any; 
  currentDate: Date = new Date();

  currentIndex: number = 0;

  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

constructor() {
  this.calculateForecastDates();
}
  getCurrentDayName(index: number): string {
    const todayIndex = this.currentDate.getDay();
    const dayIndex = (todayIndex + index) % 7;
    return this.days[dayIndex];
  }

  calculateForecastDates(){
    const currentDate = new Date();
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      this.forecastDates.push(nextDate);
    }
  }


  navigateForecast(direction: 'prev' | 'next') {
    if (direction === 'prev') {
        this.forecastDates.push(this.forecastDates.shift()!);
        this.shiftLeft=true;
        setTimeout(()=>(this.shiftLeft=false),500);
      }
     else if (direction === 'next') {
      this.forecastDates.unshift(this.forecastDates.pop()!);
      this.shiftRight=true;
      setTimeout(()=>(this.shiftRight=false),500);
    }
  }
}



