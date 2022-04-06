import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  //review using ElementRef
  @ViewChild("mapRef") mapRef?: ElementRef;
   
  constructor( private mapService:MapService) { }

  ngAfterViewInit(): void {
    this.mapService.initMap(this.mapRef?.nativeElement);
  }
    
  
}



