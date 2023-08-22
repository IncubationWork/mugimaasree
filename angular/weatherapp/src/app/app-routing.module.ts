import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WetherForecastComponent } from './wether-forecast/wether-forecast.component';
import { WeatherComponent } from './weather/weather.component';
const routes: Routes = [ { path: '', redirectTo: 'weather', pathMatch: 'full' },
{ path: 'weather', component: WeatherComponent },
{ path: 'forecast', component: WetherForecastComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
