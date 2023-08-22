import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent {

  @Input() weatherData:any; // Replace WeatherData with the appropriate type
  name!: string; // Define the 'name' property to hold the filter value
}
