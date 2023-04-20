import { Component, ViewChild, ElementRef } from '@angular/core';
import { CitiesService } from '../../Services/Map/cities.service';
import { City } from '../../City';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-citiest-on-map',
  templateUrl: './display-citiest-on-map.component.html',
  styleUrls: ['./display-citiest-on-map.component.css']
})

export class DisplayCitiestOnMapComponent {
  
  @ViewChild
    ('mapContainer', { static: false }) gmap: ElementRef;
  map!: google.maps.Map;
  mapOptions: google.maps.MapOptions = {
    center: new google.maps.LatLng(32.146611, 34.8519761),
    zoom: 2
  };

  cities: City[];

  constructor(private CitiesService: CitiesService) { }

  ngOnInit() {
    this.getCities().subscribe(e => {
      if (e) {
        this.cities = e;
      }
      this.loadAllMarkers();
    });
  }

  getCities(): Observable<City[]> {
    return this.CitiesService.getAll();
  }

  loadAllMarkers(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.cities.forEach(c => {
      console.log(c.bounds.northeast.lat, c.bounds.northeast.lng)
      this.mapInitializer(c.bounds.northeast.lat, c.bounds.northeast.lng, c.place.city)
    })
  }

  mapInitializer(lat: number, lng: number, city: string) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: this.map
    })

    const infoWindow = new google.maps.InfoWindow({
      content: city
    });

    marker.addListener("click", () => {
      infoWindow.open(this.map, marker);
    });
    marker.setMap(this.map);
  }
}
