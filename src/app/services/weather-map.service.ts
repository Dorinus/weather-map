import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherMapService {
  private readonly baseUrl = 'https://tile.openweathermap.org/map/';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getWeatherMap(layer: string, zoom: number, x: number, y: number): Observable<Blob> {
    const url = `${this.baseUrl}${layer}/${zoom}/${x}/${y}.png?appid=${this.apiKey}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
