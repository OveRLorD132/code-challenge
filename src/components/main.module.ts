import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Main } from './main.component';
import { UserCard } from './user-card.component';
import { WeatherOverlay } from './weather-overlay.component';
import CardsList from './cards-list.component';

@NgModule({
  declarations: [
    Main,
    UserCard,
    WeatherOverlay,
    CardsList
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [Main]
})
export class MainModule { }
