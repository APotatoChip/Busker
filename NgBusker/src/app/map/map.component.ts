import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild("mapRef") mapRef?: ElementRef;
  sofia: Object = { lat: 42.698334, lng: 23.319941 };
  map?: Object;
  marker?: Object;
  zoom?: number;
  constructor() { }

  ngOnInit(): void {



    setTimeout(() => {
      this.map = new google.maps.Map(this.mapRef?.nativeElement, {
        zoom: 12,
        center: this.sofia as any
      });
      this.marker = new google.maps.Marker({
        position: this.sofia as any,
        map: this.map as any
      });

    }, 2000)
  
  }

  

}
