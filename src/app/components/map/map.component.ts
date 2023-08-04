import { Component, OnInit } from '@angular/core';
import { WeatherMapService } from 'src/app/services/weather-map.service'; // Adjust the import path based on your folder structure

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  weatherMapUrl: string | undefined;

  constructor(private weatherMapService: WeatherMapService) {}

  ngOnInit(): void {
    this.loadWeatherMap();
  }

  loadWeatherMap() {
    const layer = 'temp_new';
    const zoom = 2;
    const x = 1; 
    const y = 1;


    this.weatherMapService.getWeatherMap(layer, zoom, x, y).subscribe(
      (blobData: Blob) => {
        this.weatherMapUrl = URL.createObjectURL(blobData);
      },
      (error: any) => {
        console.error('Error fetching weather map:', error);
      }
    );
  }
}
