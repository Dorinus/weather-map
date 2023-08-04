import { Injectable } from '@angular/core';
import { WeatherData } from '../types/WeatherData';
import { WeatherUtils } from '../utils/weather-utils';

@Injectable({
  providedIn: 'root',
})
export class CityStorageService {
  private readonly localStorageKey = 'weatherDataList';
  private readonly maxStoredCities = 5;

  constructor() {}

  private getStoredWeatherDataList(): WeatherData[] {
    const storedData = localStorage.getItem(this.localStorageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  private saveWeatherDataList(weatherDataList: WeatherData[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(weatherDataList));
  }

  saveWeatherData(weatherData: WeatherData): void {
    const weatherDataList: WeatherData[] = this.getStoredWeatherDataList();
    weatherData.main.feels_like = WeatherUtils.kelvinToCelsius(weatherData.main.feels_like)
    weatherData.main.temp = WeatherUtils.kelvinToCelsius(weatherData.main.temp)
    weatherData.weather[0].description = WeatherUtils.capitalizeFirstLetter(weatherData.weather[0].description)
    


    if (weatherDataList.length >= this.maxStoredCities) {
      weatherDataList.pop();
    }

    weatherDataList.unshift(weatherData);
    this.saveWeatherDataList(weatherDataList);
  }

  getWeatherDataList(): WeatherData[] {
    return this.getStoredWeatherDataList();
  }
}
