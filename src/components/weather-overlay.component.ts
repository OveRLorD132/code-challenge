import { Component, EventEmitter, Input, Output } from '@angular/core';

import showWeatherPicture from '../module/show-weather-picture';

import formatWeather from '../module/format-weather';

@Component({
  selector: 'weather-overlay',
  templateUrl: './weather-overlay.component.html',
  styleUrls: ['./weather-overlay.component.scss'],
})

export class WeatherOverlay {
  @Input() weather : any;
  @Input() temperatureList : any;
  @Output() onClosed = new EventEmitter<any>();
  getWeatherPicture(code : Number) {
    return showWeatherPicture(code);
  }
  setWeather(code : Number) {
    return formatWeather(code);
  }
  getHighestTemp() {
    let tempList : Array<number> = [];
    for(let elem of this.temperatureList) {
      tempList.push(elem.temperature);
    }
    return Math.max(...tempList);
  }
  getLowestTemp() {
    let tempList : Array<number> = [];
    for(let elem of this.temperatureList) {
      tempList.push(elem.temperature);
    }
    return Math.min(...tempList);
  }
  formatTime(time :any) {
    time = new Date(time);
    let hours = time.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = time.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes; 
    return `${hours}:${minutes}`;
  }
}