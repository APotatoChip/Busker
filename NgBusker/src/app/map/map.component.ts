import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild("mapRef") mapRef?: ElementRef;
  uluru: Object = { lat: -25.363, lng: 131.044 };
  map?: Object;
  marker?: Object;
  zoom?: number;
  constructor() { }

  ngOnInit(): void {



    setTimeout(() => {
      this.map = new google.maps.Map(this.mapRef?.nativeElement, {
        zoom: 4,
        center: this.uluru as any
      });
      this.marker = new google.maps.Marker({
        position: this.uluru as any,
        map: this.map as any
      });

    }, 2000)
  
  }

  

}
