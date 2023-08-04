import { Component } from '@angular/core';
import { WeatherData } from 'src/app/types/WeatherData';
import { CITYDATA } from 'src/app/mock-citydata';
import { CityStorageService } from 'src/app/services/cities-storage.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  cityData: WeatherData[] = CITYDATA;
  selectedCity?: WeatherData;

  constructor(private cityStorageService: CityStorageService) {
    
  }

  ngOnInit(): void {
    this.cityData = this.cityStorageService.getWeatherDataList();
  }

  reloadCityData(): void {
    // Get the updated list of cities from the storage service
    this.cityData = this.cityStorageService.getWeatherDataList();
  }

  onSelect(city: WeatherData): void {
    this.selectedCity = city;
  }



}
