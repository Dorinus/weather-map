import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/types/WeatherData';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  @Input() city: WeatherData | undefined;

}
