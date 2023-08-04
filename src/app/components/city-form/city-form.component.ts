import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherData } from 'src/app/types/WeatherData';
import { WeatherService } from 'src/app/services/weather.service';
import { CityStorageService } from 'src/app/services/cities-storage.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent {
  @Output() cityAdded: EventEmitter<WeatherData> = new EventEmitter<WeatherData>();

  cityName?: string;  
  weatherData?: WeatherData;
  errorMessage?: string;

  constructor(
    private weatherService: WeatherService,
    private cityStorageService: CityStorageService
  ) {}

  onSubmit() {
    if (this.cityName) {
      this.weatherService.getWeatherData(this.cityName).subscribe(
        (data: any) => {
          this.weatherData = Object.assign({}, data) as WeatherData;
          console.log(this.weatherData);

          // Save the weatherData to local storage
          this.cityStorageService.saveWeatherData(this.weatherData);          
          this.cityAdded.emit();  
        },
        (error) => {
          console.error('Error fetching weather data:', error);
          this.errorMessage = 'City not found!';

          setTimeout(() => {
            this.errorMessage = undefined;
          }, 2500);
        }
      );
    }

  }
}
