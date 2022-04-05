
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
   @ViewChild("mapRef") mapRef?: ElementRef;
  sofia: Object = { lat: 42.698334, lng: 23.319941 };
   map?: google.maps.Map;
   marker?: google.maps.Marker;
   zoom?: number;

  constructor() { }

  
  
  ngOnInit(): void {
  
 setTimeout(() => {
      this.map = new google.maps.Map(this.mapRef?.nativeElement, {
        zoom: 12,
        center: this.sofia as any,
        mapId:'14d2223a1d38fa88'
      });

      // Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
  const centerControlDiv = document.createElement("div");

  TagYourselfControl(centerControlDiv, this.map);

  this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(centerControlDiv);


    }, 2000)

    function TagYourselfControl(controlDiv: Element, map: google.maps.Map) {
      // Set CSS for the control border.
      const controlUI = document.createElement("div");
    
      controlUI.style.backgroundColor = "#fff";
      controlUI.style.border = "2px solid #fff";
      controlUI.style.borderRadius = "3px";
      controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
      controlUI.style.cursor = "pointer";
      controlUI.style.marginTop = "8px";
      controlUI.style.marginBottom = "22px";
      controlUI.style.textAlign = "center";
      controlUI.title = "Click to recenter the map";
      controlDiv.appendChild(controlUI);
    
      // Set CSS for the control interior.
      const controlText = document.createElement("div");
    
      controlText.style.color = "rgb(25,25,25)";
      controlText.style.fontFamily = "Roboto,Arial,sans-serif";
      controlText.style.fontSize = "16px";
      controlText.style.lineHeight = "38px";
      controlText.style.paddingLeft = "5px";
      controlText.style.paddingRight = "5px";
      controlText.innerHTML = "Tag Youself";
      controlUI.appendChild(controlText);
    
      // Setup the click event listeners: .
     
    let count=0;
   
function addMarker(){

  map.addListener("click",(mapsMouseEvent:any)=>{
    if(count==0){

      let marker = new google.maps.Marker({
       position:mapsMouseEvent.latLng,
       map:map
     })

     count++;

    
     
    }
    else{
      mapsMouseEvent.stopPropagation();
    }
 })

}

      controlUI.addEventListener("click",()=>{
       
        if(count==0){
          if(controlText.innerHTML="Tag Yourself"){
              addMarker();
            controlText.innerHTML="Done";
            
          }else{        
            controlText.innerHTML="Tag Yourself"
          }
        }else if(count==1){
          controlText.innerHTML="Untag Yourself!"
          count+=2;
        }else{
          controlText.innerHTML="Done"
          count-=2;

        }
      });
        
    
    }
    
  
  }
  
  
}



