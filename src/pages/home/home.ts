import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  cityIdnew='862468';
  iconid: any;
  iconurl : any;

  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController, private WeatherProvider:WeatherProvider) {
        this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  ionViewWillEnter(){
    this.WeatherProvider.getWeather(this.cityIdnew).subscribe(weather => {
      console.log(weather);
      this.weather = weather;

      this.iconid = this.weather.weather[0].icon;

      this.iconurl = 'http://openweathermap.org/img/w/'+this.iconid+'.png';
    });

  }

}
