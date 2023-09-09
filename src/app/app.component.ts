import { Component} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('showMap', [
      state('void', style({ opacity: 0})),
      state('*', style({opacity: 1})),
      transition(':enter', [animate('.3s')]),
      transition(':leave', [animate('.3s')])
    ])
  ]
})

export class AppComponent {
  userCoords : any = undefined;
  avatar : any = undefined;
  showMap (data : any) {
    this.userCoords = data.coords;
    this.avatar = data.avatar
  }
  hideMap() {
    this.avatar = undefined;
    this.userCoords = undefined;
  }
  subscribeToEvents(child : any) {
    child.showLocation.subscribe((data : any) => {this.showMap(data)});
  }
}
