export class WeatherUtils {
  static fahrenheitToCelsius(fahrenheit: number): number {
    return +((fahrenheit - 32) * 5 / 9).toFixed(2);
  }

  static kelvinToCelsius(kelvin: number): number {
    return +(kelvin - 273.15).toFixed(2);
  }

  static capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
