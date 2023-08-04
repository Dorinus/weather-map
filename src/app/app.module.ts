import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CityFormComponent } from './components/city-form/city-form.component';
import { HeaderComponent } from './components/header/header.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityComponent } from './components/city/city.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    CityFormComponent,
    HeaderComponent,
    CitiesComponent,
    CityComponent,
    MapComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
