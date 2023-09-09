import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCard {
  @Input() userData!: any;
  @Input() weather! : any;
  @Input() isSaved! : Boolean;
  @Output() showOverlay = new EventEmitter<any>();
  @Output() showUserLocation = new EventEmitter<any>();
  formatName(name: any) {
    return `${name.title} ${name.first} ${name.last}`;
  }
  formatLocation(location : any) {
    return `${location.city}, ${location.street.name} ${location.street.number}`;
  }
  formatGender(gender : any) {
    if(gender === 'female') return 'Female';
    else return 'Male';
  }
  emitShowOverlay() {
    this.showOverlay.emit(this.weather);
  }
  showLocation() {
    this.showUserLocation.emit({coords: this.userData.location.coordinates, avatar: this.userData.picture.large});
  }
  ngOnInit() {
    console.log(this.userData);
  }
  saveData() {
    let usersData : any = localStorage.getItem('usersData');
    usersData = usersData ? JSON.parse(usersData) : [];
    usersData.push(this.userData);
    localStorage.setItem('usersData', JSON.stringify(usersData));
    this.isSaved = true;
  }
}