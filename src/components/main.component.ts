import { Component, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import axios from 'axios';
import formatTemperature from 'src/module/format-temperature';

@Component({
  selector: 'main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('showWeather', [
      state('void', style({ transform: 'translateY(100vh)', opacity: 0})),
      state('*', style({opacity: 1})),
      transition(':enter', [animate('.1s')]),
      transition(':leave', [animate('.1s')])
    ])
  ]
})

export class Main {
  title = 'chalenge';
  userData: any = '';
  overlayIsVisible : boolean = false;
  weather : any = '';
  temperatureList : any = [];
  @Output() showLocation = new EventEmitter<any>(); 
  showOverlay() {
    this.overlayIsVisible = true;
  }
  hideOverlay() {
    this.overlayIsVisible = false;
  }
  stopProp(event : any) {
    event.stopPropagation();
  }
  emitShowLocation(location : any) {
    this.showLocation.emit(location);
  }
  ngOnInit() {
    axios.get('https://randomuser.me/api/').then(async ({ data }) => {
      this.userData = data.results[0];
      let coords = data.results[0].location.coordinates;
      let meteoData = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current_weather=true&hourly=temperature_2m&hourly=weathercode`
      )
      this.weather = meteoData.data;
      this.weather.location = data.results[0].location.city;
      this.temperatureList = formatTemperature(this.weather);
    })
  }
}
