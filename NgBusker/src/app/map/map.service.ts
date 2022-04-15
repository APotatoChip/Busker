import {  Injectable } from '@angular/core';

import { TagService } from './tag.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  
  constructor(private tagService:TagService) { }

  //Initializing the map 
  initMap(mapRef:HTMLElement, centerControlDivRef:HTMLElement): void {

    const sofiaLngLat  = new google.maps.LatLng(42.698334, 23.319941);
    const mapOptions: google.maps.MapOptions = {
      center: sofiaLngLat,
      zoom: 12,
      mapId:'14d2223a1d38fa88',
      disableDefaultUI:true
    };

    let map: google.maps.Map;
    let mapRefDiv:HTMLElement = mapRef;
    let centerControlRefDiv:HTMLElement=centerControlDivRef;
    map = new google.maps.Map(mapRefDiv, mapOptions);


    // Create the DIV to hold the control and call the TagYourselfControl()
    // constructor passing in this DIV.
   // const centerControlDiv = document.createElement("div");
  
    this.tagService.TagYourselfControl(centerControlDivRef, map);
  
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(centerControlDivRef);
   

    
 }

 
 

 

}