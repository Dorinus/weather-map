import { WeatherData } from "./types/WeatherData";

export const CITYDATA: WeatherData[] = [{
    "coord": {
      "lon": -74.006,
      "lat": 40.7143
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 297.1,
      "feels_like": 297.35,
      "temp_min": 295.92,
      "temp_max": 298.87,
      "pressure": 1015,
      "humidity": 69
    },
    "visibility": 10000,
    "wind": {
      "speed": 6.17,
      "deg": 230
    },
    "clouds": {
      "all": 100
    },
    "dt": 1691163868,
    "sys": {
      "type": 2,
      "id": 2008101,
      "country": "US",
      "sunrise": 1691142916,
      "sunset": 1691194137
    },
    "timezone": -14400,
    "id": 5128581,
    "name": "New York",
    "cod": 200
  },{
    "coord": {
      "lon": -122.4194,
      "lat": 37.7749
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 302.2,
      "feels_like": 304.11,
      "temp_min": 301.05,
      "temp_max": 304.96,
      "pressure": 1013,
      "humidity": 60
    },
    "visibility": 10000,
    "wind": {
      "speed": 4.63,
      "deg": 0
    },
    "clouds": {
      "all": 0
    },
    "dt": 1691164156,
    "sys": {
      "type": 2,
      "id": 4861,
      "country": "US",
      "sunrise": 1691144997,
      "sunset": 1691190015
    },
    "timezone": -25200,
    "id": 5391959,
    "name": "San Francisco",
    "cod": 200
  }
,  
{
    "coord": {
      "lon": 0.1276,
      "lat": 51.5074
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 289.22,
      "feels_like": 288.65,
      "temp_min": 288.03,
      "temp_max": 290.74,
      "pressure": 1021,
      "humidity": 73
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.09,
      "deg": 0
    },
    "clouds": {
      "all": 40
    },
    "dt": 1691164446,
    "sys": {
      "type": 2,
      "id": 2019646,
      "country": "GB",
      "sunrise": 1691141879,
      "sunset": 1691192860
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
  }
  

  ];