import { Component, Input, Output, EventEmitter } from '@angular/core';

import { tileLayer, latLng, Map, Marker, icon} from 'leaflet';

@Component({
  selector: 'map-overlay',
  templateUrl: './map-overlay.component.html',
  styleUrls: ['./map-overlay.component.scss'],
})
export class MapComponent {
  @Input() coords!: any;
  @Input() avatar! : any;
  @Output() mapClose = new EventEmitter<any>();
  options = {};
  map : Map | undefined;
  marker : Marker | undefined;
  ngOnInit() {
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 5,
      center: latLng(+this.coords.latitude, +this.coords.longitude)
    };
  }
  mapHide() {
    this.mapClose.emit();
  }
  onMapReady(map : Map) {
    this.map = map;
    this.marker = new Marker([+this.coords.latitude, +this.coords.longitude], 
      {icon: icon({
        iconUrl: this.avatar,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        className: 'user-icon'
      })});
    this.marker.addTo(this.map);
  }
}
