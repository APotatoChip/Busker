import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CustomControlsService } from './custom-controls.service';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private locationService:LocationService, private userService:UserService, private customControls:CustomControlsService) { }

  TagYourselfControl(controlDiv: Element, map: google.maps.Map) {

   var controlsArray:Array<HTMLElement>=this.customControls.createMapCustomControls();
   
   const controlUI:HTMLElement=controlsArray[0];
   var controlText:HTMLElement = controlsArray[1];
   const controlUIDone:HTMLElement=controlsArray[2];
   const controlUICancel:HTMLElement=controlsArray[4];

   // Appending all control buttons to the main div container
   controlDiv.append(controlUI,controlUIDone,controlUICancel);
 
   // Setup the click event listeners:
  let count:number=0;
  let marker:google.maps.Marker;


  // Loading initial position if any on page refresh
  this.locationService.getCurrentLocation().subscribe((res)=>{
  
  if(this.locationService.isPerforming==true){
    // Cheking if there is already a tag
    controlText.innerHTML ="Untag Yourself";
    // Getting the location coordiantes of the tag from the response
    let coords= new google.maps.LatLng(res.location[0],res.location[1]);

  
var innerDivContainer = this.customControls.createInfoWindow(this.userService);
var infowindow = new google.maps.InfoWindow({
  content:  innerDivContainer,
});

  // Creating marker for the lococation
      marker = new google.maps.Marker({
        position:coords,
      map:map
      })
    
  // Listener for the opening of info-window
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });    
    
  }else{
   controlText.innerHTML="Tag Yourself"
  } 
 });

 // Logic for the control and marker
 // Changing button state depending on if theres already a tag or not 
   controlUI.addEventListener("click",(e)=>{
     // Logic for untagged
     if(controlText.innerHTML==="Tag Yourself" ){      
      if(this.locationService.isPerforming===false && count==0){
           controlUI.style.display="none";
           controlUIDone.style.display="block";
           controlUICancel.style.display="block";
        
          // Event listener for done button
           controlUIDone.addEventListener("click",()=>{
                    
             controlUI.style.display="block";
             controlUIDone.style.display="none";
            controlUICancel.style.display="none";

            // Cheking whether the user tagged himself or not and if tagged saving the tag 
          if(marker.getMap()!==null){
           this.locationService.postCurrentLocation([lat,lng]).subscribe((res)=>{
             // Creating info window using the function from above
            var innerDivContainer= this.customControls.createInfoWindow(this.userService);
            const infowindow = new google.maps.InfoWindow({
              content: innerDivContainer,
            });
            
            marker.addListener("click", () => {
              infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
              });
            }); 
         
             controlText.innerHTML="Untag Yourself"
           });
         }else{
           controlText.innerHTML="Tag Yourself"
           // Stopping the user from spamming markers because only one allowed per user
           google.maps.event.clearListeners(map,"click");
         } 
           })

           // Event listener for the cancel button
           controlUICancel.addEventListener("click",()=>{
             controlUI.style.display="block";
             controlUIDone.style.display="none";
           controlUICancel.style.display="none"; 
           // Checkin whether the user tagged himself or not and if tagged removing the tag
           if(marker.getMap()!==null){
             marker.setMap(null);
             count=0;
             google.maps.event.clearListeners(map,"click");
           } else{
             // Stopping the user from spamming markers because its only one allowed per user
             google.maps.event.clearListeners(map,"click");
           }
           });


             let lat:String | undefined;
             let lng:String | undefined;
             {
      // Creating the tag marker if the user is not currently tagged 
      // if so changing the control button state
    map.addListener("click",(mapsMouseEvent:google.maps.MapMouseEvent)=>{
   if(this.locationService.isPerforming==false && count==0){   
     
               marker = new google.maps.Marker({
                 position:mapsMouseEvent.latLng,
                 map:map
               })
            // Getting the mouse position
                lat= marker.getPosition()?.lat().toString();
                lng = marker.getPosition()?.lng().toString()
             count=1;       
           }else{
            // Preventing the user from spamming markers
             mapsMouseEvent.stop();
           }
     });
 
   }  
 }  
}else{
 controlText.innerHTML="Untag Yourself"
 // Untaggin self from the map and removing the marker
 this.locationService.deleteCurrentMarker().subscribe((res)=>{
   controlText.innerHTML="Tag Yourself"
   marker.setMap(null);
   count=0;
   google.maps.event.clearListeners(map,"click");
})
}
});
  }}


