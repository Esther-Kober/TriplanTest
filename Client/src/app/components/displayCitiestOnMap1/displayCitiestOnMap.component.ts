import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject, Observer } from 'rxjs';

import { CitiesService } from '../../Services/Map/cities.service';
import { City } from '../../City';

@Component({
  selector: 'app-displayCitiestOnMap',
  templateUrl: './displayCitiestOnMap.component.html',
  styleUrls: ['./displayCitiestOnMap.component.css']
})
export class CitiesComponent {
  @ViewChild
    ('mapContainer', { static: false }) gmap: ElementRef;
  map!: google.maps.Map;
  mapOptions: google.maps.MapOptions = {
    center: new google.maps.LatLng(32.146611, 34.8519761),
    zoom: 2
  };

  cities: City[] = [];
  constructor(private CitiesService: CitiesService) {
  }
  ngOnInit(){
    this.getCities()
    setTimeout(() => {
      this.loadAllMarkers()
    }, 1000);
  }

  getCities(): void {
    this.CitiesService
      .getAll()
      .subscribe(
        (data: City[]) => {
          this.cities = data
          console.log('Operation success')
        },
        (err) => {
          console.log(err)
        }
      );
  }

  loadAllMarkers(): void {
    this.getCities();
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    console.log('cities', this.cities)
    this.cities.forEach(c => {
      console.log(c.bounds.northeast.lat, c.bounds.northeast.lng)
      this.mapInitializer(c.bounds.northeast.lat, c.bounds.northeast.lng,c.place.city)
    })
  }

  mapInitializer(lat: number, lng: number,city:string) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: this.map
    })

    const infoWindow = new google.maps.InfoWindow({
      content:city
    });

    marker.addListener("click", () => {
      infoWindow.open(this.map, marker);
    });
    marker.setMap(this.map);
  }
}




