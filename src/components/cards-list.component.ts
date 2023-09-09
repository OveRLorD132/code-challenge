import { Component, Output, EventEmitter } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import axios from "axios";
import formatTemperature from "src/module/format-temperature";

@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
  animations: [
    trigger('showWeather', [
      state('void', style({ transform: 'translateY(100vh)', opacity: 0})),
      state('*', style({opacity: 1})),
      transition(':enter', [animate('.1s')]),
      transition(':leave', [animate('.1s')])
    ])
  ]
})

export default class CardsList {
  title = 'Cards list';
  usersData : any;
  isLoaded : Boolean = false;
  chosenWeather : any;
  @Output() showLocation = new EventEmitter<any>(); 
  emitShowLocation(location : any) {
    this.showLocation.emit(location);
  }
  showOverlay(weather : any) {
    this.chosenWeather = weather;
  }
  hideOverlay() {
    this.chosenWeather = undefined;
  }
  stopProp(e : any) {
    e.stopPropagation();
  }
  ngOnInit() {
    this.usersData = localStorage.getItem('usersData');
    this.usersData = this.usersData ? JSON.parse(this.usersData) : [];
    getAllWeather(this.usersData).then((newData) => {
      this.usersData = newData;
      this.isLoaded = true;
    })
  }
}

async function getAllWeather(data : any) {
  let profiles = [];
  for(let profile of data) {
    let meteoData = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${profile.location.coordinates.latitude}&longitude=${profile.location.coordinates.longitude}&current_weather=true&hourly=temperature_2m&hourly=weathercode`
    )
    let temperatureList = formatTemperature(meteoData.data);
    meteoData.data.tempList = temperatureList;
    profile = {
      profile,
      weather: meteoData.data
    }
    profiles.push(profile);
  }
  return profiles;
}