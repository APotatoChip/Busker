import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MapService } from './map.service';
import { LocationService } from './location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  //review using ElementRef
  @ViewChild("mapRef") mapRef?: ElementRef;
  
   
  constructor( private mapService:MapService,private locationService:LocationService) { }

  ngAfterViewInit(): void {
 
    //hacking the problem with async loading (not a good practice wtf am I doin? check later)
   setTimeout(()=>{

     this.mapService.initMap(this.mapRef?.nativeElement);
   },1000)

 
  }

 
   
  }
    
  




