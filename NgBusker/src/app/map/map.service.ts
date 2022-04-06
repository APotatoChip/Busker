import { Injectable } from '@angular/core';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  
  constructor(private locationService:LocationService) { }

  //Initializing the map
  initMap(mapRef:HTMLElement): void {

    const sofiaLngLat  = new google.maps.LatLng(42.698334, 23.319941);
    const mapOptions: google.maps.MapOptions = {
      center: sofiaLngLat,
      zoom: 12,
      mapId:'14d2223a1d38fa88',
      disableDefaultUI:true
    };

    let map: google.maps.Map;
    let mapRefDiv:HTMLElement = mapRef;
    map = new google.maps.Map(mapRefDiv, mapOptions);

    // Create the DIV to hold the control and call the TagYourselfControl()
    // constructor passing in this DIV.
    const centerControlDiv = document.createElement("div");
    this.TagYourselfControl(centerControlDiv, map);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(centerControlDiv);
 }

   TagYourselfControl(controlDiv: Element, map: google.maps.Map) {
     //Remove CSS from here
    // Set CSS for the control border.
    const controlUI = document.createElement("div");
  
    
    controlUI.style.backgroundColor = "var(--accent)";
    controlUI.style.border = "2px solid var(--accent)";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "8px";
    controlUI.style.marginBottom = "22px";
    controlUI.style.textAlign = "center";
    //controlUI.title = "Click to recenter the map";
    controlDiv.appendChild(controlUI);
  
    // Set CSS for the control interior.
    const controlText = document.createElement("div");
  
    controlText.style.color = "#fff";
    controlText.style.fontFamily = "var(--main-font)";
    controlText.style.fontSize = "16px";
    controlText.style.lineHeight = "38px";
    controlText.style.paddingLeft = "5px";
    controlText.style.paddingRight = "5px";
    controlText.innerHTML = "Tag Youself";
    controlUI.appendChild(controlText);
  
    // Setup the click event listeners: 
   
  let count:number=0;
  let marker:google.maps.Marker; 
  
      if(this.locationService.isPerforming==true){
        controlText.innerHTML="Untag Yourself!"
                  
        this.locationService.getCurrentLocation().subscribe((res)=>{
        let coords= new google.maps.LatLng(res[0],res[1]);

          marker = new google.maps.Marker({
            position:coords,
          map:map
          })
          
        })
      }
    controlUI.addEventListener("click",()=>{
      if(this.locationService.isPerforming==false){
          if(controlText.innerHTML="Tag Yourself"){      
               map.addListener("click",(mapsMouseEvent:google.maps.MapMouseEvent)=>{
                    if(this.locationService.isPerforming==false){   
                      console.log(mapsMouseEvent.latLng);
                                        
                          marker = new google.maps.Marker({
                            position:mapsMouseEvent.latLng,
                            map:map
                          })

                          let lat= marker.getPosition()?.lat().toString();
                          let lng = marker.getPosition()?.lng().toString()
                          
                          this.locationService.postCurrentLocation([lat,lng]).subscribe((res)=>{
                            controlText.innerHTML="Done";
                          });
                      }else{
                         mapsMouseEvent.stop();
                      }
                });
             
          }else{        
              controlText.innerHTML="Tag Yourself"
          }
        }
          else if( this.locationService.isPerforming==true && controlText.innerHTML==="Untag Yourself!"){
            this.locationService.deleteCurrentMarker().subscribe((res)=>{
              console.log(res);
              marker.setMap(null);
            });
            controlText.innerHTML="Tag Yourself"
          }else if(this.locationService.isPerforming==true){
          
            controlText.innerHTML="Untag Yourself!"
          }
          
    });
      
  
  }
  
}
