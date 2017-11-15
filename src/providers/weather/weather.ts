import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class WeatherProvider {

  apiKey = '&APPID=472a64bfc5883ce2d96fa4b711af5090'; /*'http://dataservice.accuweather.com/currentconditions/v1/318483?apikey=uDZwk28Zx8kr6mNV2c1AeuSDRhn8UIi9&language=en-us&details=true"';*/
  url= 'http://api.openweathermap.org/data/2.5/weather?id=';
  default_cityId = '862468';
  language = '&lang=tr';
  units = '&units=metric';

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    //this.url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=472a64bfc5883ce2d96fa4b711af5090';
  }

  getWeather(url){
    return this.http.get(this.url+this.default_cityId+this.units+this.language+this.apiKey).map(res => res);
  }
}
